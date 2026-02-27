import {
  SUBJECTS,
  type Documents,
  type Homework,
  type Subjects,
  type Tests,
  type TimelineItem,
  type Works,
} from "../types/data-types";

// ATUALIZAÇÕES IMPORTANTES
export const timeline_obj: TimelineItem = {
  event: "o Kick-off Geral",
  start: new Date(2026, 2, 5),
  end: new Date(2026, 2, 6),
};
// TAREFAS SEMANAIS
export const homeworks_array: Homework[] = [
  {
    id: 1,
    due_date: new Date(2026, 1, 27),
    subject: SUBJECTS.INGLES,
    news: false,
    desc: "Fazer resumo sobre o Steve Jobs e ouvir discurso do Martin Luther King.",
    hasInstructions: false,
    fileID: undefined,
  },
  {
    id: 2,
    due_date: new Date(2026, 1, 26),
    subject: SUBJECTS.COMUNICACAO,
    news: true,
    desc: "Fazer até o exercício 16 do arquivo de coletânea de erros. Identificar e circular o que está errado e escrever a versão correta.",
    hasInstructions: true,
    fileID: "16qKiWClbqNmfAgWWVXt86LEt7Ywryz4Z",
  },
  // {
  //   id: 3,
  //   due_date: new Date(2026, 2, 9),
  //   subject: SUBJECTS.PROGRAMACAO,
  //   news: true,
  //   desc: "Fazer todos os exercícos da lista do arquivo prática01. Pode ser feito em dupla e deve ser entregue como um arquivo compactado.",
  //   hasInstructions: true,
  //   fileID: "1TdWlW4CRzVubVAY6M_VomjcM8QgUKew6",
  // },
];
// PROVAS SEMANAIS

export const tests_array: Tests[] = [];

// TRABALHOS PERTO DO PRAZO
export const works_array: Works[] = [
  {
    id: 1,
    hasDate: false,
    due_date: new Date(2026, 1, 28),
    subject: SUBJECTS.SISTEMAS,
    title: "Atividade Avaliativa 1",
    news: true,
    desc: "Atividade prática para transformar os dados dos arquivos de exel em banco de dados conceituais. Faça o diagrama de entidade e relacionamento dos exemplos 1 (DRE 2019), 3 (Estoque), 4 (SAC) e 5 (Logística).",
    hasInstructions: true,
    fileID: "1bfIPHJAiCCUH-dZxghpvxyfe_WDUetEF",
  },
  {
    id: 2,
    hasDate: false,
    due_date: new Date(2026, 2, 9),
    subject: SUBJECTS.CALCULO,
    title: "Lista 01",
    news: false,
    desc: "Fazer todos os exercícios da lista 1 parte 1. Link de download ao lado.",
    hasInstructions: true,
    fileID: "1XqvtQRpDMAAdygctWT4y3Hi8MAtBGxjY",
  },
  {
    id: 3,
    hasDate: true,
    due_date: new Date(2026, 2, 9),
    subject: SUBJECTS.PROGRAMACAO,
    title: "Lista Prática 01",
    news: true,
    desc: "Fazer todos os exercícos da lista do arquivo prática01. Pode ser feito em dupla e deve ser entregue como um arquivo compactado.",
    hasInstructions: true,
    fileID: "1TdWlW4CRzVubVAY6M_VomjcM8QgUKew6",
  },
];

// MATÉRIAS (PROFESSORES, DESCRIÇÃO, HORÁRIOS, ETC)
export const subjects_array: Subjects[] = [
  {
    id: 3,
    teacher: "Nanci de Oliveira",
    subject: SUBJECTS.CALCULO,
    desc: "Teoria e prática de cálculo de funções, limites, derivadas e integrais",
    link: "https://drive.google.com/drive/folders/1GUNBnSghGVW-74MPpeVC7U8aVpZ5rXe5?usp=drive_link",
    news: false,
    classes: [
      {
        day: "tue",
        start: "09:15",
        end: "10:55",
      },
      {
        day: "wed",
        start: "09:15",
        end: "10:55",
      },
    ],
    days: ["Terça-feira", "Quarta-feira"],
  },
  {
    id: 5,
    teacher: "Claudio Etelvino de Lima",
    subject: SUBJECTS.SISTEMAS,
    desc: "Focada na prática da API e na aprendizagem de banco de dados",
    link: "https://drive.google.com/drive/folders/1oQeFwaASaBoN360Cep0Ydqoh9kW50Exq?usp=drive_link",
    news: true,
    classes: [
      {
        day: "thu",
        start: "07:10",
        end: "10:55",
      },
    ],
    days: ["Quinta-feira"],
  },
  {
    id: 7,
    teacher: "Merlúcia Gavião",
    subject: SUBJECTS.INGLES,
    desc: "Aulas sobre proficiência na lingua inglesa.",
    link: "https://drive.google.com/drive/folders/1i1aUhlBeaFfaUoQSB5xmKjTyp9WtqZf2?usp=drive_link",
    news: false,
    classes: [
      {
        day: "fri",
        start: "07:10",
        end: "08:50",
      },
    ],
    days: ["Sexta-feira"],
  },
  {
    id: 4,
    teacher: "Eliane Penha Mergulhão Dias",
    subject: SUBJECTS.COMUNICACAO,
    desc: "Prática de redação e gêneros textuais",
    link: "https://drive.google.com/drive/folders/1fOLTfmABRKk0e_6M1ypwZTJooRjGfMvw?usp=drive_link",
    news: false,
    classes: [
      {
        day: "mon",
        start: "07:10",
        end: "08:50",
      },
      // {
      //   day: "tue",
      //   start: "10:55",
      //   end: "12:35",
      // },
      {
        day: "thu",
        start: "10:55",
        end: "12:35",
      },
    ],
    days: ["Terça-feira", "Quinta-feira"],
  },
  {
    id: 1,
    teacher: "Indefinido",
    subject: SUBJECTS.ENGENHARIA,
    desc: "Aula sobre conceitos de banco de dados junto com a parte do cliente das API (PO)",
    link: "https://drive.google.com/drive/folders/1nspG39hKYTwjb1oQ4awnSkhfV1NGl_X8?usp=drive_link",
    news: false,
    classes: [
      // {
      //   day: "mon",
      //   start: "07:10",
      //   end: "08:50",
      // },
      {
        day: "tue",
        start: "07:10",
        end: "08:50",
      },
    ],
    days: ["Segunda-feira", "Terça-feira"],
  },
  {
    id: 2,
    teacher: "Juliana Fornin Pasquini Martinez",
    subject: SUBJECTS.PROGRAMACAO,
    desc: "Focada na aprendizagem da linguagem JAVA e da integração de sistemas CRUD com banco de dados",
    link: "https://drive.google.com/drive/folders/1_ARLUTlrSCJ-JJ2F14ASwWXJBcggZqmy?usp=drive_link",
    news: true,
    classes: [
      {
        day: "mon",
        start: "09:15",
        end: "10:55",
      },
      {
        day: "wed",
        start: "07:10",
        end: "08:50",
      },
    ],
    days: ["Segunda-feira", "Quarta-feira"],
  },

  {
    id: 6,
    teacher: "Dercy Felix da Silva",
    subject: SUBJECTS.CONTABILIDADE,
    desc: "Conteúdo aborda conceitos de contabilidade, como representações gráficas de balanço patrimonial",
    link: "https://drive.google.com/drive/folders/1wju7D3JPGN_tOTYnX_Ixeds6s1DXCI0Z?usp=drive_link",
    news: false,
    classes: [
      {
        day: "fri",
        start: "09:15",
        end: "10:55",
      },
    ],
    days: ["Sexta-feira"],
  },
];
// DOCUMENTOS
export const documents_array: Documents[] = [
  {
    id: 1,
    name: "Novo Regulamento das Fatecs",
    desc: "Informação sobre o novo regulamento das Fatecs que entrou em vigor para os Cursos Superiores de Tecnologia a partir do ano letivo de 2026",
    fileID: "13ug1FDuN_aA7wVVcFnrMMQ4znzznDzEy",
  },
  {
    id: 2,
    name: "Calendário 2026",
    desc: "Informação sobre todos os eventos do ano letivo de 2026",
    fileID: "1-CU17PzYKXjhzS-O81nne747Kx2eAQQt",
  },
];
