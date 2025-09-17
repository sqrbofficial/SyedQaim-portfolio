import { Brain, Gamepad2, Code, Smartphone, Globe, Cog } from "lucide-react";
import { useOwner } from "@/contexts/OwnerContext";
import SkillEditor from "@/components/SkillEditor";

const Skills = () => {
  const { getSkillCategories, updateSkillCategories, isOwnerMode } = useOwner();
  const skillCategories = getSkillCategories();

  const iconMap = {
    "ai-ml": Brain,
    "unity-dev": Gamepad2,
    "programming": Code,
    "mobile-dev": Smartphone,
    "web-dev": Globe,
    "automation": Cog
  };

  const colorMap = {
    "ai-ml": "text-accent",
    "unity-dev": "text-primary",
    "programming": "text-green-400",
    "mobile-dev": "text-blue-400",
    "web-dev": "text-orange-400",
    "automation": "text-purple-400"
  };

  const getIcon = (categoryId: string) => iconMap[categoryId as keyof typeof iconMap] || Brain;
  const getColor = (categoryId: string) => colorMap[categoryId as keyof typeof colorMap] || "text-primary";

  const calculateCategoryPercentage = (skills: any[]) => {
    if (skills.length === 0) return 0;
    const total = skills.reduce((sum, skill) => sum + skill.percentage, 0);
    return Math.round(total / skills.length);
  };

  return (
    <section id="skills" className="section-padding relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse toolkit built through passion, practice, and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = getIcon(category.id);
            const color = getColor(category.id);
            const avgPercentage = calculateCategoryPercentage(category.skills);

            return (
              <div key={category.id} className="card-project group">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-secondary ${color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <span className={`text-sm ${color} font-medium`}>
                        {category.level}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.id} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-sm">
                            {skill.name}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-gradient-primary transition-all duration-500 group-hover:shadow-glow"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Overall proficiency indicator */}
                  <div className="mt-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Overall Proficiency</span>
                      <span className="text-sm font-medium">{avgPercentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-primary transition-all duration-500 group-hover:shadow-glow"
                        style={{ width: `${avgPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Technologies */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-gradient">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Unity", "Python", "Android Studio", "Flutter", "VS Code", "Git", 
              "n8n", "Shopify", "TensorFlow", "OpenCV", "React", "Node.js",
              "Firebase", "SQL", "MongoDB", "AWS", "Docker", "Figma"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-secondary border border-border/50 rounded-lg text-sm font-medium hover:border-primary/30 hover:bg-primary/10 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Skills Editor for Owner Mode */}
      {isOwnerMode && (
        <SkillEditor 
          categories={skillCategories}
          onUpdateCategories={updateSkillCategories}
        />
      )}
    </section>
  );
};

export default Skills;