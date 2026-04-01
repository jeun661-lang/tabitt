export type TravelType = 'shiba' | 'cat' | 'tanuki' | 'fox' | 'deer';

export interface TypeInfo {
  id: TravelType;
  name: string;
  subTitle: string;
  emoji: string;
  description: string;
  detailedDescription: string;
  englishName: string;
  englishSubTitle: string;
  props: string;
  accentColor: string;
  lightColor: string;
  bgColor: string;
}

export interface QuestionOption {
  text: string;
  type: TravelType;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export interface TestScores {
  shiba: number;
  cat: number;
  tanuki: number;
  fox: number;
  deer: number;
}
