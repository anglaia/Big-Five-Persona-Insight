
export interface Facet {
  name: string;
  nameZh: string;
  score: number;
  level: 'low' | 'neutral' | 'high';
  description: string;
  descriptionZh: string;
}

export interface Trait {
  id: string;
  name: string;
  nameZh: string;
  totalScore: number;
  description: string;
  descriptionZh: string;
  color: string;
  facets: Facet[];
}

export interface PersonalityReport {
  id: string;
  date: string;
  traits: Trait[];
}
