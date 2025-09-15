import { ArrowRight, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useOwner } from "@/contexts/OwnerContext";
import EditableText from "@/components/EditableText";

const Hero = () => {
  const { getContent } = useOwner();
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
            <button 
              onClick={scrollToProjects}
              className="btn-hero group"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button 
              onClick={scrollToContact}
              className="btn-secondary group"
            >
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex justify-center">
            <button className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 group">
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