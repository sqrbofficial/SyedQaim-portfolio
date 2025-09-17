import { createContext, useContext, useState, ReactNode } from 'react';

interface Skill {
  id: string;
  name: string;
  percentage: number;
}

interface SkillCategory {
  id: string;
  title: string;
  level: string;
  skills: Skill[];
}

interface OwnerContextType {
  isOwnerMode: boolean;
  enableOwnerMode: () => void;
  disableOwnerMode: () => void;
  updateContent: (section: string, field: string, value: string) => void;
  getContent: (section: string, field: string) => string;
  content: Record<string, Record<string, string>>;
  updateLink: (buttonId: string, link: string) => void;
  getLink: (buttonId: string) => string;
  links: Record<string, string>;
  updateSkillCategories: (categories: SkillCategory[]) => void;
  getSkillCategories: () => SkillCategory[];
  skillCategories: SkillCategory[];
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

const defaultSkillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    level: "Intermediate",
    skills: [
      { id: "ml-theory", name: "Machine Learning Theory", percentage: 75 },
      { id: "ai-models", name: "AI Model Implementation", percentage: 70 },
      { id: "computer-vision", name: "Computer Vision", percentage: 65 },
      { id: "nlp", name: "Natural Language Processing", percentage: 60 },
      { id: "emotion-detection", name: "Emotion Detection", percentage: 55 },
      { id: "ai-assistant", name: "AI Assistant Development", percentage: 70 }
    ]
  },
  {
    id: "unity-dev",
    title: "Unity Game Development",
    level: "Advanced (3 years)",
    skills: [
      { id: "3d-games", name: "3D Game Development", percentage: 90 },
      { id: "game-physics", name: "Game Physics & Mechanics", percentage: 85 },
      { id: "ui-ux", name: "UI/UX Design", percentage: 80 },
      { id: "performance", name: "Performance Optimization", percentage: 88 },
      { id: "cross-platform", name: "Cross-platform Development", percentage: 85 },
      { id: "analytics", name: "Game Analytics", percentage: 75 }
    ]
  },
  {
    id: "programming",
    title: "Programming Languages",
    level: "Proficient",
    skills: [
      { id: "python", name: "Python (Advanced)", percentage: 85 },
      { id: "csharp", name: "C# (Unity)", percentage: 90 },
      { id: "js-ts", name: "JavaScript/TypeScript", percentage: 75 },
      { id: "java", name: "Java (Android)", percentage: 70 },
      { id: "dart", name: "Dart (Flutter)", percentage: 65 },
      { id: "git", name: "Git Version Control", percentage: 80 }
    ]
  }
];

export const OwnerProvider = ({ children }: { children: ReactNode }) => {
  const [isOwnerMode, setIsOwnerMode] = useState(false);
  const [content, setContent] = useState(defaultContent);
  const [links, setLinks] = useState<Record<string, string>>({});
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>(defaultSkillCategories);

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

  const updateLink = (buttonId: string, link: string) => {
    setLinks(prev => ({
      ...prev,
      [buttonId]: link
    }));
  };

  const getLink = (buttonId: string) => {
    return links[buttonId] || '';
  };

  const updateSkillCategories = (categories: SkillCategory[]) => {
    setSkillCategories(categories);
  };

  const getSkillCategories = () => {
    return skillCategories;
  };

  return (
    <OwnerContext.Provider value={{
      isOwnerMode,
      enableOwnerMode,
      disableOwnerMode,
      updateContent,
      getContent,
      content,
      updateLink,
      getLink,
      links,
      updateSkillCategories,
      getSkillCategories,
      skillCategories
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