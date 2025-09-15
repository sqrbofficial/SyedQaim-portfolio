import { Brain, Gamepad2, Code, Smartphone, Globe, Cog } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      level: "Intermediate",
      color: "text-accent",
      skills: [
        "Machine Learning Theory",
        "AI Model Implementation", 
        "Computer Vision",
        "Natural Language Processing",
        "Emotion Detection",
        "AI Assistant Development"
      ]
    },
    {
      icon: Gamepad2,
      title: "Unity Game Development",
      level: "Advanced (3 years)",
      color: "text-primary",
      skills: [
        "3D Game Development",
        "Game Physics & Mechanics",
        "UI/UX Design",
        "Performance Optimization",
        "Cross-platform Development",
        "Game Analytics"
      ]
    },
    {
      icon: Code,
      title: "Programming Languages",
      level: "Proficient",
      color: "text-green-400",
      skills: [
        "Python (Advanced)",
        "C# (Unity)",
        "JavaScript/TypeScript",
        "Java (Android)",
        "Dart (Flutter)",
        "Git Version Control"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      level: "Intermediate",
      color: "text-blue-400",
      skills: [
        "Android Studio",
        "Flutter Framework",
        "Mobile UI/UX",
        "App Store Deployment",
        "Cross-platform Apps",
        "Mobile Optimization"
      ]
    },
    {
      icon: Globe,
      title: "Web Development",
      level: "Growing",
      color: "text-orange-400",
      skills: [
        "HTML/CSS",
        "React Basics",
        "Responsive Design",
        "VS Code Workflow",
        "Web APIs",
        "Frontend Frameworks"
      ]
    },
    {
      icon: Cog,
      title: "Automation & Tools",
      level: "Advanced",
      color: "text-purple-400",
      skills: [
        "n8n Automation",
        "Python Bots",
        "Instagram Automation",
        "E-commerce Tools", 
        "API Integration",
        "Workflow Optimization"
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
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
          {skillCategories.map((category, index) => (
            <div key={index} className="card-project group">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-secondary ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                    <span className={`text-sm ${category.color} font-medium`}>
                      {category.level}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:bg-accent transition-colors duration-300"></div>
                      <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Skill level indicator */}
                <div className="mt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-muted-foreground">Proficiency</span>
                    <span className="text-sm font-medium">
                      {category.level === "Advanced" || category.level === "Advanced (3 years)" ? "90%" :
                       category.level === "Intermediate" ? "70%" :
                       category.level === "Proficient" ? "80%" : "60%"}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-primary transition-all duration-500 group-hover:shadow-glow`}
                      style={{
                        width: category.level === "Advanced" || category.level === "Advanced (3 years)" ? "90%" :
                               category.level === "Intermediate" ? "70%" :
                               category.level === "Proficient" ? "80%" : "60%"
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
    </section>
  );
};

export default Skills;