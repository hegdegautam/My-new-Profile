export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  duration: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    description?: string;
  }[];
}

export interface Certificate {
  name: string;
  issuer?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  contact: ContactInfo;
  about: string[];
  experience: ExperienceItem[];
  internship: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  skills: SkillCategory[];
  certificates: Certificate[];
  interests: string[];
}