import { useState } from "react";
import { ExternalLink, Edit2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useOwner } from "@/contexts/OwnerContext";

interface LinkEditorProps {
  buttonText: string;
  currentLink?: string;
  onUpdateLink: (link: string) => void;
  className?: string;
}

const LinkEditor = ({ buttonText, currentLink = "", onUpdateLink, className = "" }: LinkEditorProps) => {
  const { isOwnerMode } = useOwner();
  const [isEditing, setIsEditing] = useState(false);
  const [link, setLink] = useState(currentLink);

  if (!isOwnerMode) return null;

  const handleSave = () => {
    onUpdateLink(link);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setLink(currentLink);
    setIsEditing(false);
  };

  return (
    <div className={`absolute top-0 right-0 z-10 ${className}`}>
      {isEditing ? (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg min-w-[200px]">
          <Label className="text-xs text-muted-foreground">
            Link for "{buttonText}"
          </Label>
          <Input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://example.com"
            className="mb-2 h-8"
          />
          <div className="flex gap-1">
            <Button size="sm" onClick={handleSave}>
              <Save className="h-3 w-3" />
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancel}>
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ) : (
        <Button
          size="sm"
          variant="outline"
          onClick={() => setIsEditing(true)}
          className="opacity-70 hover:opacity-100"
        >
          <Edit2 className="h-3 w-3 mr-1" />
          <ExternalLink className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
};

export default LinkEditor;