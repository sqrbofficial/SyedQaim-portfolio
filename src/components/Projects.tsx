import { ExternalLink, Github, Play, Smartphone, Brain, ShoppingCart, Bot } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "FamConnect",
      description: "A family bonding mobile app designed to strengthen relationships through shared activities, memories, and communication tools.",
      tech: ["Android Studio", "Java", "Firebase", "Material Design"],
      category: "Mobile App",
      icon: Smartphone,
      color: "text-blue-400",
      features: ["Family profiles", "Shared calendars", "Memory sharing", "Activity suggestions"]
    },
    {
      title: "VibRan - Random Video Chat",
      description: "A random video chat application connecting people worldwide with advanced matching algorithms and safety features.",
      tech: ["Android Studio", "WebRTC", "Socket.io", "Firebase"],
      category: "Social App",
      icon: Play,
      color: "text-green-400",
      features: ["Random matching", "Video calls", "Safety filters", "User reporting"]
    },
    {
      title: "AI Doctor Prototype",
      description: "An AI-powered healthcare assistant that provides preliminary health consultations and symptom analysis.",
      tech: ["Python", "TensorFlow", "NLP", "Medical APIs"],
      category: "AI Healthcare",
      icon: Brain,
      color: "text-red-400",
      features: ["Symptom analysis", "Health recommendations", "Medical knowledge base", "User history"]
    },
    {
      title: "OutfiX - AI Virtual Closet",
      description: "Smart wardrobe management system using AI to suggest outfits based on weather, occasion, and personal style.",
      tech: ["Flutter", "Computer Vision", "AI/ML", "Weather APIs"],
      category: "AI Lifestyle",
      icon: Brain,
      color: "text-purple-400",
      features: ["Outfit suggestions", "Weather integration", "Style analysis", "Wardrobe tracking"]
    },
    {
      title: "Unity Game Portfolio",
      description: "Collection of 3D games showcasing various mechanics, from platformers to puzzle games with polished gameplay.",
      tech: ["Unity", "C#", "3D Modeling", "Game Physics"],
      category: "Game Development",
      icon: Play,
      color: "text-orange-400",
      features: ["3D environments", "Physics systems", "UI/UX design", "Performance optimization"]
    },
    {
      title: "E-commerce Automation Suite",
      description: "Comprehensive automation tools for Shopify stores, Amazon-eBay dropshipping, and product research.",
      tech: ["Python", "Shopify API", "Web Scraping", "n8n"],
      category: "Automation",
      icon: ShoppingCart,
      color: "text-green-400",
      features: ["Product hunting", "Price monitoring", "Inventory management", "Sales analytics"]
    },
    {
      title: "Instagram Automation Bot",
      description: "Intelligent social media bot for automated engagement, content scheduling, and follower growth strategies.",
      tech: ["Python", "Instagram API", "Machine Learning", "Selenium"],
      category: "Social Automation",
      icon: Bot,
      color: "text-pink-400",
      features: ["Smart engagement", "Content scheduling", "Analytics dashboard", "Safe automation"]
    },
    {
      title: "AI PC Assistant",
      description: "Voice-activated desktop assistant with natural language processing for system control and task automation.",
      tech: ["Python", "Speech Recognition", "NLP", "System APIs"],
      category: "AI Desktop",
      icon: Brain,
      color: "text-blue-400",
      features: ["Voice commands", "System control", "Task automation", "Learning capabilities"]
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions crafted with passion, creativity, and cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-project group">
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-secondary ${project.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className={`text-xs font-medium ${project.color} uppercase tracking-wide`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-primary">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-muted/50 border border-border/50 rounded-full text-muted-foreground group-hover:border-primary/30 group-hover:text-foreground transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-primary/10 border border-primary/20 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300 group-hover:shadow-glow">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center px-4 py-2 text-sm font-medium bg-transparent border border-border/50 rounded-lg text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </button>
                </div>
              </div>

              {/* Hover overlay effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Interested in collaborating on innovative projects?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-hero"
          >
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;