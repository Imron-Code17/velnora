export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'Residensial' | 'Villa Tropis' | 'Penthouse' | 'Commercial & Living';
  location: string;
  year: string;
  area: string;
  leadArchitect: string;
  heroImage: string;
  gallery: string[];
  description: string;
  concept: string;
  materials: string[];
  clientQuote?: {
    text: string;
    author: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
  highlightTag: string;
}

export interface AdvantageItem {
  id: string;
  number: string;
  title: string;
  description: string;
  detail: string;
  iconName: 'Sparkles' | 'Layers' | 'Compass' | 'ShieldCheck';
}

export interface ProcessStepItem {
  step: string;
  title: string;
  duration: string;
  description: string;
  details: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  project: string;
  location: string;
  avatar: string;
  content: string;
  highlight: string;
  rating: number;
}
