import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { OwnerProvider } from "@/contexts/OwnerContext";

const Index = () => {
  return (
    <OwnerProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </OwnerProvider>
  );
};

export default Index;
