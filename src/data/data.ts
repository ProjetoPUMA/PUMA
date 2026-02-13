export const timeline_obj = {
    event: "o Kick-off Geral",
    start: new Date(2026,2,3),
    end: new Date(2026,2,6),
} 

export const subjects_array = [
    {
        id: 1,
        teacher: 'A Definir',
        subject: 'Engenharia de Software I',
        desc: 'A definir',
        link: '',
        news: false,
        classes: {
            mon: '7h10 - 08h50',
            tue: '7h10 - 8h50',
        },
        days: [
            'Segunda-feira',
            'Terça-feira'
        ]
    },
    {
        id: 2,
        teacher: 'Juliana Fornin Pasquini Martinez',
        subject: 'Linguagem de Programação',
        desc: 'Focada na aprendizagem da linguagem JAVA e da integração de sistemas CRUD com banco de dados.',
        link: 'https://drive.google.com/drive/folders/1ZRFhcHtuXjg3m25ohmVwfDRFy4T5H59Z?usp=drive_link',
        news: false,
        classes: {
            mon: '9h15 - 10h55',
            wed: '7h10 - 8h50',
        },
        days: [
            'Segunda-feira',
            'Quarta-feira'
        ]
    },
    {
        id: 3,
        teacher: 'Nanci de Oliveira',
        subject: 'Cálculo',
        desc: 'Teoria e prática de cálculo de funções, limites, derivadas e integrais.',
        link: 'https://drive.google.com/drive/folders/1Bi2lptTcjr4Aa77ecE-4raAaEhKCcSN1?usp=drive_link',
        news: false,
        classes: {
            tue: '9h15 - 10h55',
            wed: '9h15 - 10h55',
        },
        days: [
            'Terça-feira',
            'Quarta-feira'
        ]
    },
    {
        id: 4,
        teacher: 'Eliane Penha Mergulhão Dias',
        subject: 'Comunicação e Expressão',
        desc: 'Prática de redação e gêneros textuais.',
        link: '',
        news: false,
        classes: {
            tue: '10h55 - 12h35',
            thu: '10h55 - 12h35',
        },
        days: [
            'Terça-feira',
            'Quinta-feira'
        ]
    },
    {
        id: 5,
        teacher: 'Claudio Etelvino de Lima',
        subject: 'Sistemas de Informação',
        desc: 'Focada na prática da API e na aprendizagem de banco de dados.',
        link: '',
        news: true,
        classes: {
            thu: '07h10 - 10h55',
        },
        days: [
            'Quinta-feira'
        ]
    },
    {
        id: 6,
        teacher: 'Dercy Felix da Silva',
        subject: 'Contabilidade',
        desc: 'A definir',
        link: '',
        news: false,
        classes: {
            thu: '10h05 - 11h45',
        },
        days: [
            'Sexta-feira',
        ]
    }
]

export const homeworks_array = [
    {
        id: 1,
        due_date: new Date(2026, 1, 19),
        subject: 'Sistemas da Informação',
        news: true,
        desc: 'Tarefa em grupo: Design Thinking; Discutir ideias e elaborar um protótipo no Figma para apresentar ao professor.'

    }
]

export const tests_array = [
    {
        id: 1,
        due_date: new Date('2026-02-16'),
        subject: 'Matéria teste',
        news: false,
        content: [
            'Assunto 1',
            'Assunto 2',
            'Assunto 3',
            'Assunto 4'
        ],
        link: '#'
    }
]

export const works = [
    {
        id: 1,
        due_date: new Date('2026-02-16'),
        subject: 'Matéria teste',
        title: 'Trabalho de Web',
        news: false,
        desc: 'Essa é a descrição do trabalho'
    }
]