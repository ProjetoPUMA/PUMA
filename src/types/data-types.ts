export const SUBJECTS = {
  INGLES: "Inglês",
  CALCULO: "Cálculo",
  COMUNICACAO: "Comunicação e Expressão",
  SISTEMAS: "Sistemas de Informação",
  PROGRAMACAO: "Linguagem de Programação",
  ENGENHARIA: "Engenharia de Software I",
  CONTABILIDADE: "Contabilidade",
} as const;

export type SubjectType = (typeof SUBJECTS)[keyof typeof SUBJECTS];

export interface TimelineItem {
  event: string;
  start: Date;
  end: Date;
}

export interface Homework {
  id: number;
  due_date: Date;
  subject: SubjectType;
  hasDate?: boolean | undefined;
  news: boolean;
  desc: string;
  hasInstructions: boolean;
  fileID?: string;
}

export interface Tests {
  id: number;
  due_date: Date;
  subject: SubjectType;
  hasDate?: boolean | undefined;
  news: boolean;
  content: string[];
  hasInstructions: boolean;
  fileID?: string;
}

export interface Works {
  id: number;
  hasDate?: boolean;
  due_date: Date;
  subject: SubjectType;
  title: string;
  news: boolean;
  desc: string;
  hasInstructions: boolean;
  fileID?: string;
}

export interface Subjects {
  id: number;
  teacher: string;
  subject: SubjectType;
  desc: string;
  link: string;
  news: boolean;
  classes: {
    day: string;
    start: string;
    end: string;
  }[];
  days: string[];
}

export interface Documents {
  id: number;
  name: string;
  desc: string;
  fileID: string;
}
