// ATUALIZAÇÕES IMPORTANTES
export const timeline_obj = {
  event: "o Kick-off Geral",
  start: new Date(2026, 2, 3),
  end: new Date(2026, 2, 6),
};
// TAREFAS SEMANAIS
export const homeworks_array = [
  {
    id: 1,
    due_date: new Date(2026, 1, 24),
    subject: "Sistemas de Informação",
    news: false,
    desc: "Tarefa em grupo: Design Thinking; Discutir ideias e elaborar um protótipo no Figma para apresentar ao professor.",
    hasInstructions: true,
    fileID: "1qo8_PeJl2j2fdisbvDrk77GMihIDI18r",
  },
  {
    id: 2,
    due_date: new Date(2026, 1, 27),
    subject: "Inglês         ",
    news: false,
    desc: "Fazer resumo do Steve Jobs, e ouvir discurso do Martin Luther King.",
    hasInstructions: false,
    fileID: undefined,
  },
];
// PROVAS SEMANAIS
export const tests_array = [
  {
    id: 1,
    due_date: new Date(2026, 1, 10),
    subject: "Exemplo de teste",
    news: false,
    content: [
      "Ainda não tivemos nenhuma prova",
      "Esta prova irá sumir quando a primeira for anunciada"
      // "Mas o nosso sistema precisa de um exemplo pra existir de fundo",
      // "Se não ele não funciona",
      // "whoops",
    ],
    fileID: "#",
    hasInstructions: false,
  },
];
// TRABALHOS PERTO DO PRAZO
export const works_array = [
  {
    id: 1,
    due_date: new Date(2026, 1, 23),
    subject: "Linguagem de Programação",
    title: "Lista de JAVA",
    news: false,
    desc: "Realizar os exercícios de 2 a 5 da lista proporcionada no link ao lado.",
    hasInstructions: true,
    fileID: "1DBvwwcFZv93C2tp2GqSOSlj8U9WGfJD2",
  },
  {
    id: 2,
    due_date: new Date(2026, 1, 21),
    subject: "Sistemas de Informação",
    title: "Exercícios de banco de dados",
    news: false,
    desc: "Realizar os exercícios de banco de dados disponibilizados nos slides.",
    hasInstructions: false,
    fileID: "",
  },
];
// MATÉRIAS (PROFESSORES, DESCRIÇÃO, HORÁRIOS, ETC)
export const subjects_array = [
  {
    id: 3,
    teacher: "Nanci de Oliveira",
    subject: "Cálculo",
    desc: "Teoria e prática de cálculo de funções, limites, derivadas e integrais",
    link: "https://drive.google.com/drive/folders/1Bi2lptTcjr4Aa77ecE-4raAaEhKCcSN1?usp=drive_link",
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
    subject: "Sistemas de Informação",
    desc: "Focada na prática da API e na aprendizagem de banco de dados",
    link: "https://drive.google.com/drive/folders/1oQeFwaASaBoN360Cep0Ydqoh9kW50Exq?usp=drive_link",
    news: false,
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
    subject: "Inglês",
    desc: "Aulas sobre proficiência na lingua inglesa.",
    link: "https://drive.google.com/drive/folders/1tHTnSA6ZFSl6ytK3QJOJMWCoWAYQ9wJf?usp=drive_link",
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
    subject: "Comunicação e Expressão",
    desc: "Prática de redação e gêneros textuais",
    link: "https://drive.google.com/drive/folders/1hkbTPX6UFCEpDCjW8eN00TzKBgzKCFWx?usp=sharing",
    news: false,
    classes: [
      {
        day: "tue",
        start: "10:55",
        end: "12:35",
      },
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
    subject: "Engenharia de Software I",
    desc: "Aula sobre conceitos de banco de dados junto com a parte do cliente das API (PO)",
    link: "https://drive.google.com/drive/folders/1_OgFnkUL8DfG4twlTBzIjzt5bYWPxeMf?usp=drive_link",
    news: false,
    classes: [
      {
        day: "mon",
        start: "07:10",
        end: "08:50",
      },
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
    subject: "Linguagem de Programação",
    desc: "Focada na aprendizagem da linguagem JAVA e da integração de sistemas CRUD com banco de dados",
    link: "https://drive.google.com/drive/folders/1ZRFhcHtuXjg3m25ohmVwfDRFy4T5H59Z?usp=drive_link",
    news: false,
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
    subject: "Contabilidade",
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
export const documents_array = [
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
