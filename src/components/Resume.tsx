import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const handleDownload = () => {
    const element = document.createElement('a');
    const resume = document.getElementById('resume-content');
    if (resume) {
      // Create a printable version
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
            <body>${resume.innerHTML}</body>
          </html>
        `);
        printWindow.document.close();
        printWindow.print();
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-background">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-foreground">Resume</h1>
        <Button onClick={handleDownload} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>

      <div id="resume-content" className="space-y-8 text-foreground">
        {/* Header */}
        <div className="header text-center border-b-2 border-primary pb-6">
          <h1 className="text-4xl font-bold text-primary mb-2">Syed Qaim Hussain Raza Bukhari</h1>
          <p className="text-xl text-muted-foreground mb-4">AI & Tech Enthusiast | Unity Game Developer | Automation Specialist</p>
          <div className="contact-info flex justify-center gap-6 flex-wrap text-sm">
            <span>📍 Multan, Pakistan</span>
            <span>📧 syedqaim@email.com</span>
            <span>📱 +92-XXX-XXXXXXX</span>
            <span>🔗 LinkedIn: /in/syedqaim</span>
            <span>💻 GitHub: /syedqaim</span>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="section">
          <h2 className="text-2xl font-bold text-primary border-b border-primary pb-2 mb-4">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed">
            Passionate AI & Technology enthusiast with expertise in Unity game development and automation solutions. 
            Experienced in creating innovative digital experiences and implementing cutting-edge technologies. 
            Strong background in software development, artificial intelligence, and process automation.
          </p>
        </div>

        {/* Experience */}
        <div className="section">
          <h2 className="text-2xl font-bold text-primary border-b border-primary pb-2 mb-4">Professional Experience</h2>
          
          <div className="experience-item border-l-4 border-primary pl-4 mb-6">
            <h3 className="text-xl font-semibold">Senior Unity Developer</h3>
            <p className="text-primary font-medium">Tech Solutions Inc. | 2022 - Present</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Developed and deployed 15+ mobile and PC games using Unity 3D</li>
              <li>Implemented AI-driven gameplay mechanics and procedural content generation</li>
              <li>Optimized game performance resulting in 40% faster loading times</li>
              <li>Mentored junior developers and led cross-functional development teams</li>
            </ul>
          </div>

          <div className="experience-item border-l-4 border-primary pl-4 mb-6">
            <h3 className="text-xl font-semibold">Automation Specialist</h3>
            <p className="text-primary font-medium">Digital Innovations Ltd. | 2020 - 2022</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Designed and implemented automated testing frameworks</li>
              <li>Reduced manual testing efforts by 60% through process automation</li>
              <li>Developed custom tools for workflow optimization</li>
              <li>Collaborated with stakeholders to identify automation opportunities</li>
            </ul>
          </div>

          <div className="experience-item border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold">Software Developer</h3>
            <p className="text-primary font-medium">StartUp Solutions | 2018 - 2020</p>
            <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-1">
              <li>Built responsive web applications using modern frameworks</li>
              <li>Integrated AI/ML models into production applications</li>
              <li>Participated in agile development processes and code reviews</li>
              <li>Contributed to open-source projects and technical documentation</li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="section">
          <h2 className="text-2xl font-bold text-primary border-b border-primary pb-2 mb-4">Technical Skills</h2>
          <div className="skills-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="skill-category bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Game Development</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Unity 3D/2D</li>
                <li>C# Programming</li>
                <li>Game Physics</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            <div className="skill-category bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">AI & Machine Learning</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>Python</li>
                <li>TensorFlow</li>
                <li>Neural Networks</li>
                <li>Data Analysis</li>
              </ul>
            </div>
            <div className="skill-category bg-muted/50 p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">Web Development</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>React/TypeScript</li>
                <li>Node.js</li>
                <li>RESTful APIs</li>
                <li>Database Design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="section">
          <h2 className="text-2xl font-bold text-primary border-b border-primary pb-2 mb-4">Education</h2>
          <div className="education-item border-l-4 border-primary pl-4">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-primary font-medium">University of Engineering & Technology | 2016 - 2020</p>
            <p className="text-muted-foreground mt-1">Graduated with Honors | GPA: 3.8/4.0</p>
          </div>
        </div>

        {/* Certifications */}
        <div className="section">
          <h2 className="text-2xl font-bold text-primary border-b border-primary pb-2 mb-4">Certifications</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Unity Certified Developer - Unity Technologies</li>
            <li>• AWS Certified Solutions Architect</li>
            <li>• Google Analytics Certified</li>
            <li>• Scrum Master Certification</li>
          </ul>
        </div>

        {/* Projects */}
        <div className="section">
          <h2 className="text-2xl font-bold text-primary border-b border-primary pb-2 mb-4">Notable Projects</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">AI-Powered Game Assistant</h4>
              <p className="text-muted-foreground text-sm">Developed an intelligent NPC system using machine learning algorithms for adaptive gameplay experiences.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">Automated Testing Framework</h4>
              <p className="text-muted-foreground text-sm">Created comprehensive automation tools that reduced testing cycles from weeks to days.</p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h4 className="font-semibold">Cross-Platform Mobile Game</h4>
              <p className="text-muted-foreground text-sm">Built and published a successful mobile game with 100K+ downloads across iOS and Android platforms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;