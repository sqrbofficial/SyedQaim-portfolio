import { useState } from "react";
import { Plus, Edit2, Trash2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useOwner } from "@/contexts/OwnerContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface Skill {
  id: string;
  name: string;
  percentage: number;
}

interface SkillCategory {
  id: string;
  title: string;
  level: string;
  skills: Skill[];
}

interface SkillEditorProps {
  categories: SkillCategory[];
  onUpdateCategories: (categories: SkillCategory[]) => void;
}

const SkillEditor = ({ categories, onUpdateCategories }: SkillEditorProps) => {
  const { isOwnerMode } = useOwner();
  const [editingCategory, setEditingCategory] = useState<string | null>(null);
  const [editingSkill, setEditingSkill] = useState<{ categoryId: string; skillId: string } | null>(null);
  const [newSkill, setNewSkill] = useState({ name: "", percentage: 70 });
  const [addingSkillTo, setAddingSkillTo] = useState<string | null>(null);

  if (!isOwnerMode) return null;

  const addSkill = (categoryId: string) => {
    if (!newSkill.name.trim()) return;

    const updatedCategories = categories.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          skills: [...cat.skills, {
            id: Date.now().toString(),
            name: newSkill.name,
            percentage: newSkill.percentage
          }]
        };
      }
      return cat;
    });

    onUpdateCategories(updatedCategories);
    setNewSkill({ name: "", percentage: 70 });
    setAddingSkillTo(null);
  };

  const deleteSkill = (categoryId: string, skillId: string) => {
    const updatedCategories = categories.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          skills: cat.skills.filter(skill => skill.id !== skillId)
        };
      }
      return cat;
    });

    onUpdateCategories(updatedCategories);
  };

  const updateSkill = (categoryId: string, skillId: string, updates: Partial<Skill>) => {
    const updatedCategories = categories.map(cat => {
      if (cat.id === categoryId) {
        return {
          ...cat,
          skills: cat.skills.map(skill => 
            skill.id === skillId ? { ...skill, ...updates } : skill
          )
        };
      }
      return cat;
    });

    onUpdateCategories(updatedCategories);
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-card border border-border rounded-lg p-4 shadow-lg max-h-[80vh] overflow-y-auto w-80">
      <h3 className="text-lg font-bold mb-4 text-primary">Skills Editor</h3>
      
      {categories.map((category) => (
        <div key={category.id} className="mb-6 border-b border-border pb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-foreground">{category.title}</h4>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setAddingSkillTo(category.id)}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          
          {/* Add new skill */}
          {addingSkillTo === category.id && (
            <div className="mb-3 p-3 bg-muted rounded-lg">
              <Input
                placeholder="Skill name"
                value={newSkill.name}
                onChange={(e) => setNewSkill(prev => ({ ...prev, name: e.target.value }))}
                className="mb-2"
              />
              <Label className="text-sm">Percentage: {newSkill.percentage}%</Label>
              <Slider
                value={[newSkill.percentage]}
                onValueChange={(value) => setNewSkill(prev => ({ ...prev, percentage: value[0] }))}
                min={0}
                max={100}
                step={5}
                className="mb-2"
              />
              <div className="flex gap-2">
                <Button size="sm" onClick={() => addSkill(category.id)}>
                  <Save className="h-3 w-3" />
                </Button>
                <Button size="sm" variant="outline" onClick={() => setAddingSkillTo(null)}>
                  <X className="h-3 w-3" />
                </Button>
              </div>
            </div>
          )}
          
          {/* Existing skills */}
          <div className="space-y-2">
            {category.skills.map((skill) => (
              <div key={skill.id} className="flex items-center justify-between gap-2">
                {editingSkill?.categoryId === category.id && editingSkill?.skillId === skill.id ? (
                  <SkillEditForm
                    skill={skill}
                    onSave={(updates) => {
                      updateSkill(category.id, skill.id, updates);
                      setEditingSkill(null);
                    }}
                    onCancel={() => setEditingSkill(null)}
                  />
                ) : (
                  <>
                    <div className="flex-1">
                      <div className="text-sm text-foreground">{skill.name}</div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full bg-primary"
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                      <div className="text-xs text-muted-foreground">{skill.percentage}%</div>
                    </div>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setEditingSkill({ categoryId: category.id, skillId: skill.id })}
                      >
                        <Edit2 className="h-3 w-3" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteSkill(category.id, skill.id)}
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const SkillEditForm = ({ 
  skill, 
  onSave, 
  onCancel 
}: { 
  skill: Skill; 
  onSave: (updates: Partial<Skill>) => void; 
  onCancel: () => void; 
}) => {
  const [name, setName] = useState(skill.name);
  const [percentage, setPercentage] = useState(skill.percentage);

  return (
    <div className="flex-1 p-2 bg-muted rounded">
      <Input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-2 h-8"
      />
      <Label className="text-xs">Percentage: {percentage}%</Label>
      <Slider
        value={[percentage]}
        onValueChange={(value) => setPercentage(value[0])}
        min={0}
        max={100}
        step={5}
        className="mb-2"
      />
      <div className="flex gap-1">
        <Button
          size="sm"
          onClick={() => onSave({ name, percentage })}
        >
          <Save className="h-3 w-3" />
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={onCancel}
        >
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};

export default SkillEditor;
