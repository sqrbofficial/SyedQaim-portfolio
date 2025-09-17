import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useOwner } from "@/contexts/OwnerContext";
import EditableText from "@/components/EditableText";
import LinkEditor from "@/components/LinkEditor";

const Hero = () => {
  const { getContent, getLink, updateLink, isOwnerMode } = useOwner();
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse-glow"></div>
      </div>

      <div className="container-custom relative z-10 text-center px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <EditableText 
              section="hero" 
              field="name" 
              className="text-gradient block mt-2"
            >
              {getContent('hero', 'name') || 'Syed Qaim Hussain Raza Bukhari'}
            </EditableText>
          </h1>
          
          <EditableText 
            section="hero" 
            field="subtitle" 
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            multiline
          >
            {getContent('hero', 'subtitle') || 'A passionate AI & Tech enthusiast, Unity Game Developer, and Automation Specialist from Multan, Pakistan'}
          </EditableText>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="relative">
              <button 
                onClick={() => {
                  const link = getLink('hero-projects');
                  if (link) {
                    window.open(link, '_blank');
                  } else {
                    scrollToProjects();
                  }
                }}
                className="btn-hero group"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              {isOwnerMode && (
                <LinkEditor
                  buttonText="View Projects"
                  currentLink={getLink('hero-projects')}
                  onUpdateLink={(link) => updateLink('hero-projects', link)}
                  className="-top-2 -right-2"
                />
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => {
                  const link = getLink('hero-contact');
                  if (link) {
                    window.open(link, '_blank');
                  } else {
                    scrollToContact();
                  }
                }}
                className="btn-secondary group"
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              {isOwnerMode && (
                <LinkEditor
                  buttonText="Contact Me"
                  currentLink={getLink('hero-contact')}
                  onUpdateLink={(link) => updateLink('hero-contact', link)}
                  className="-top-2 -right-2"
                />
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button 
              onClick={() => {
                const element = document.createElement('a');
                const resume = document.getElementById('resume-content');
                if (resume) {
                  const printWindow = window.open('', '_blank');
                  if (printWindow) {
                    printWindow.document.write(`
                      <!DOCTYPE html>
                      <html>
                        <head>
                          <title>Syed Qaim Hussain Raza Bukhari - Resume</title>
                          <style>
                            body { font-family: Arial, sans-serif; line-height: 1.6; margin: 40px; color: #333; }
                            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
                            .section { margin-bottom: 25px; }
                            .section h2 { color: #2563eb; border-bottom: 1px solid #2563eb; padding-bottom: 5px; }
                            .contact-info { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-top: 10px; }
                            .experience-item, .education-item { margin-bottom: 15px; }
                            .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
                            .skill-category { background: #f8f9fa; padding: 10px; border-radius: 5px; }
                            @media print { body { margin: 20px; } }
                          </style>
                        </head>
                        <body>
                          <div class="header">
                            <h1>Syed Qaim Hussain Raza Bukhari</h1>
                            <p>AI & Tech Enthusiast | Unity Game Developer | Automation Specialist</p>
                            <div class="contact-info">
                              <span>📍 Multan, Pakistan</span>
                              <span>📧 syedqaim@email.com</span>
                              <span>📱 +92-XXX-XXXXXXX</span>
                              <span>🔗 LinkedIn: /in/syedqaim</span>
                              <span>💻 GitHub: /syedqaim</span>
                            </div>
                          </div>
                          
                          <div class="section">
                            <h2>Professional Summary</h2>
                            <p>Passionate AI & Technology enthusiast with expertise in Unity game development and automation solutions. Experienced in creating innovative digital experiences and implementing cutting-edge technologies.</p>
                          </div>

                          <div class="section">
                            <h2>Professional Experience</h2>
                            <div class="experience-item">
                              <h3>Senior Unity Developer - Tech Solutions Inc. (2022 - Present)</h3>
                              <ul>
                                <li>Developed and deployed 15+ mobile and PC games using Unity 3D</li>
                                <li>Implemented AI-driven gameplay mechanics and procedural content generation</li>
                                <li>Optimized game performance resulting in 40% faster loading times</li>
                                <li>Mentored junior developers and led cross-functional development teams</li>
                              </ul>
                            </div>
                            <div class="experience-item">
                              <h3>Automation Specialist - Digital Innovations Ltd. (2020 - 2022)</h3>
                              <ul>
                                <li>Designed and implemented automated testing frameworks</li>
                                <li>Reduced manual testing efforts by 60% through process automation</li>
                                <li>Developed custom tools for workflow optimization</li>
                              </ul>
                            </div>
                          </div>

                          <div class="section">
                            <h2>Technical Skills</h2>
                            <div class="skills-grid">
                              <div class="skill-category">
                                <h4>Game Development</h4>
                                <ul><li>Unity 3D/2D</li><li>C# Programming</li><li>Game Physics</li><li>Performance Optimization</li></ul>
                              </div>
                              <div class="skill-category">
                                <h4>AI & Machine Learning</h4>
                                <ul><li>Python</li><li>TensorFlow</li><li>Neural Networks</li><li>Data Analysis</li></ul>
                              </div>
                              <div class="skill-category">
                                <h4>Web Development</h4>
                                <ul><li>React/TypeScript</li><li>Node.js</li><li>RESTful APIs</li><li>Database Design</li></ul>
                              </div>
                            </div>
                          </div>

                          <div class="section">
                            <h2>Education</h2>
                            <div class="education-item">
                              <h3>Bachelor of Science in Computer Science</h3>
                              <p>University of Engineering & Technology (2016 - 2020)</p>
                              <p>Graduated with Honors | GPA: 3.8/4.0</p>
                            </div>
                          </div>

                          <div class="section">
                            <h2>Certifications</h2>
                            <ul>
                              <li>Unity Certified Developer - Unity Technologies</li>
                              <li>AWS Certified Solutions Architect</li>
                              <li>Google Analytics Certified</li>
                              <li>Scrum Master Certification</li>
                            </ul>
                          </div>
                        </body>
                      </html>
                    `);
                    printWindow.document.close();
                    printWindow.print();
                  }
                }
              }}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;