export interface HeroStat {
  value: string;
  label: string;
}

export interface FeatureItem {
  title: string;
  desc: string;
  /** CSS border-radius value driving the icon glyph shape (square/circle/rounded). */
  shape: string;
}

export interface WorkflowStep {
  n: string;
  title: string;
  desc: string;
}

export interface BigStat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface FooterColumn {
  title: string;
  links: string[];
}