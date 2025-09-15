import { createContext, useContext, useState, ReactNode } from 'react';

interface OwnerContextType {
  isOwnerMode: boolean;
  enableOwnerMode: () => void;
  disableOwnerMode: () => void;
  updateContent: (section: string, field: string, value: string) => void;
  getContent: (section: string, field: string) => string;
  content: Record<string, Record<string, string>>;
}

const OwnerContext = createContext<OwnerContextType | undefined>(undefined);

const defaultContent = {
  hero: {
    name: "Syed Qaim Hussain Raza Bukhari",
    subtitle: "A passionate AI & Tech enthusiast, Unity Game Developer, and Automation Specialist from Multan, Pakistan"
  },
  about: {
    title: "About Me",
    subtitle: "Driven by curiosity and powered by innovation",
    journey: "I'm an A-Level student at Lahore Grammar School, Multan, with an insatiable passion for technology, artificial intelligence, and game development. My journey began with curiosity about how things work and evolved into creating innovative solutions that bridge the gap between imagination and reality.",
    description: "With over 3 years of experience in Unity game development, extensive work in Python automation, and a growing expertise in AI and machine learning, I'm constantly pushing the boundaries of what's possible. My interests span from developing family-bonding apps like FamConnect to creating AI-powered solutions for everyday problems."
  },
  contact: {
    email: "syed.qaim@example.com",
    location: "Multan, Pakistan",
    github: "#",
    linkedin: "#",
    youtube: "#"
  }
};

export const OwnerProvider = ({ children }: { children: ReactNode }) => {
  const [isOwnerMode, setIsOwnerMode] = useState(false);
  const [content, setContent] = useState(defaultContent);

  const enableOwnerMode = () => setIsOwnerMode(true);
  const disableOwnerMode = () => setIsOwnerMode(false);

  const updateContent = (section: string, field: string, value: string) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const getContent = (section: string, field: string) => {
    return content[section]?.[field] || '';
  };

  return (
    <OwnerContext.Provider value={{
      isOwnerMode,
      enableOwnerMode,
      disableOwnerMode,
      updateContent,
      getContent,
      content
    }}>
      {children}
    </OwnerContext.Provider>
  );
};

export const useOwner = () => {
  const context = useContext(OwnerContext);
  if (context === undefined) {
    throw new Error('useOwner must be used within an OwnerProvider');
  }
  return context;
};