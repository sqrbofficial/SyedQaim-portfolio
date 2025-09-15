import { GraduationCap, Heart, Code, Lightbulb } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "A-Level student at Lahore Grammar School, Multan"
    },
    {
      icon: Code,
      title: "Technical Expertise", 
      description: "3+ years in Unity game development & AI projects"
    },
    {
      icon: Lightbulb,
      title: "Innovation Driven",
      description: "Creating AI solutions & automation tools"
    },
    {
      icon: Heart,
      title: "Passionate Learner",
      description: "Always exploring new technologies & possibilities"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-secondary">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and powered by innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative">
            <div className="card-premium p-8 text-center">
              <div className="w-64 h-64 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl font-bold text-white">SQ</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Professional photo placeholder - A creative mind always at work
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm an A-Level student at Lahore Grammar School, Multan, with an insatiable passion for technology, 
                artificial intelligence, and game development. My journey began with curiosity about how things work 
                and evolved into creating innovative solutions that bridge the gap between imagination and reality.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With over 3 years of experience in Unity game development, extensive work in Python automation, 
                and a growing expertise in AI and machine learning, I'm constantly pushing the boundaries of what's 
                possible. My interests span from developing family-bonding apps like FamConnect to creating 
                AI-powered solutions for everyday problems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="card-premium p-6 group">
                  <item.icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="card-premium p-6 bg-gradient-primary/10 border-primary/20">
              <h4 className="font-semibold text-primary mb-2">Core Values</h4>
              <p className="text-muted-foreground">
                <strong>Creative:</strong> Thinking outside the box to solve complex problems. <br />
                <strong>Curious:</strong> Always learning and exploring new technologies. <br />
                <strong>Self-driven:</strong> Taking initiative and ownership of my projects. <br />
                <strong>Lifelong learner:</strong> Committed to continuous growth and improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;