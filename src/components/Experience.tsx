import { Briefcase, Youtube, Award, Users, TrendingUp, Zap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Automation Specialist",
      period: "2022 - Present",
      type: "Freelance",
      description: "Developing custom automation solutions for businesses using Python, n8n, and AI technologies.",
      achievements: [
        "Created 15+ automation workflows for e-commerce businesses",
        "Improved client efficiency by 60% through process automation",
        "Specialized in Instagram marketing bots and Shopify integrations"
      ],
      icon: Zap,
      color: "text-blue-400"
    },
    {
      title: "Unity Game Developer",
      period: "2021 - Present",
      type: "Personal Projects",
      description: "Building engaging 3D games and interactive experiences with focus on innovative gameplay mechanics.",
      achievements: [
        "Completed comprehensive Unity game development course",
        "Published multiple game prototypes with polished gameplay",
        "Mastered 3D modeling, physics systems, and UI/UX design"
      ],
      icon: Briefcase,
      color: "text-green-400"
    },
    {
      title: "Content Creator - WimboRhymes",
      period: "2022 - Present", 
      type: "YouTube Channel",
      description: "Educational YouTube channel focused on children's poems and nursery rhymes with creative storytelling.",
      achievements: [
        "Created engaging educational content for children",
        "Developed video editing and content creation skills",
        "Built audience through consistent, quality content"
      ],
      icon: Youtube,
      color: "text-red-400"
    },
    {
      title: "Tech Tutorial Creator",
      period: "2023 - Present",
      type: "YouTube Channel",
      description: "Technology-focused channel sharing AI experiments, programming tutorials, and tech insights.",
      achievements: [
        "Published tutorials on AI and machine learning concepts",
        "Demonstrated practical programming applications",
        "Shared insights on emerging technologies and trends"
      ],
      icon: Users,
      color: "text-purple-400"
    }
  ];

  const achievements = [
    {
      icon: TrendingUp,
      title: "15+ Automation Projects",
      description: "Successfully delivered custom automation solutions"
    },
    {
      icon: Award,
      title: "3 Years Unity Experience", 
      description: "Consistent game development and skill progression"
    },
    {
      icon: Users,
      title: "YouTube Creator",
      description: "Building communities through educational content"
    },
    {
      icon: Zap,
      title: "AI Innovation",
      description: "Pioneering practical AI applications for real-world problems"
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on projects and continuous learning
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-4xl mx-auto mb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-primary"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${
              index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
            }`}>
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="card-premium p-6 group">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-secondary ${exp.color} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                      <exp.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className={`text-xs font-medium ${exp.color} uppercase tracking-wide`}>
                        {exp.type}
                      </span>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-gradient transition-all duration-300">
                    {exp.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8 text-gradient">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card-premium p-6 text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold mb-2 group-hover:text-gradient transition-all duration-300">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Recognition */}
        <div className="mt-16 text-center">
          <div className="card-premium p-8 bg-gradient-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4 text-gradient">Recognition & Growth</h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              From self-taught programming to freelance success, my journey reflects a commitment to continuous 
              learning and practical application. Each project has contributed to building a diverse skill set 
              and deep understanding of modern technology trends.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Self-taught Developer",
                "Freelance Success", 
                "YouTube Creator",
                "AI Enthusiast",
                "Game Developer",
                "Automation Expert"
              ].map((badge, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;