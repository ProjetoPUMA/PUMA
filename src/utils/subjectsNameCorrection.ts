export const MATERIA_NAMES = {
  calculo: "CÁLCULO",
  sistemas: "SISTEMAS DA INFORMAÇÃO",
  ingles: "INGLÊS",
  comunicacao: "COMUNICAÇÃO E EXPRESSÃO",
  engenharia: "ENGENHARIA DE SOFTWARE I",
  programacao: "LINGUAGEM DE PROGRAMAÇÃO",
  contabilidade: "CONTABILIDADE",
};

export const getSubjectName = (key: string | undefined): string => {
  if (key && key in MATERIA_NAMES) {
    return MATERIA_NAMES[key as keyof typeof MATERIA_NAMES];
  }
  return "Matéria não encontrada";
};
