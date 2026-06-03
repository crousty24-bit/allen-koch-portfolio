import type { Language } from '../i18n/i18n'

export type AboutAccordionItem = {
  answer: Record<Language, string>
  id: string
  question: Record<Language, string>
}

export type AboutJourneyItem = {
  description: Record<Language, string>
  icon:
    | 'steps'
    | 'markup'
    | 'javascript'
    | 'odin'
    | 'thp'
    | 'ruby'
    | 'rails'
    | 'fullstack'
    | 'react'
    | 'today'
  id: string
  title: Record<Language, string>
}

export const aboutAccordionItems: AboutAccordionItem[] = [
  {
    id: 'working-style',
    question: {
      fr: 'Comment abordes-tu un nouveau projet ?',
      en: 'How do you approach a new project?',
    },
    answer: {
      fr: 'Clarifier le besoin, cadrer un premier périmètre utile, puis itérer avec une base technique lisible.',
      en: 'Clarify the need, frame a useful first scope, then iterate with a readable technical base.',
    },
  },
  {
    id: 'delivery-focus',
    question: {
      fr: 'Quelles priorités guides-tu pendant la livraison ?',
      en: 'What priorities guide delivery?',
    },
    answer: {
      fr: "Garder l'expérience claire, le code maintenable et les décisions assez simples pour avancer proprement.",
      en: 'Keep the experience clear, the code maintainable and the decisions simple enough to move cleanly.',
    },
  },
  {
    id: 'collaboration',
    question: {
      fr: 'Comment travailles-tu avec une équipe ou un client ?',
      en: 'How do you work with a team or client?',
    },
    answer: {
      fr: 'Communiquer le contexte, documenter les points importants et utiliser le feedback pour ajuster le produit.',
      en: 'Communicate context, document the important points and use feedback to adjust the product.',
    },
  },
]

export const aboutJourneyItems: AboutJourneyItem[] = [
  {
    id: 'first-steps',
    icon: 'steps',
    title: {
      fr: 'Premiers pas',
      en: 'First steps',
    },
    description: {
      fr: 'Découverte du code et début de ma reconversion',
      en: 'Discovering code and starting my career switch',
    },
  },
  {
    id: 'html-css',
    icon: 'markup',
    title: {
      fr: 'HTML / CSS',
      en: 'HTML / CSS',
    },
    description: {
      fr: 'Structure, mise en page, bases du web',
      en: 'Structure, layout and web fundamentals',
    },
  },
  {
    id: 'javascript',
    icon: 'javascript',
    title: {
      fr: 'JavaScript',
      en: 'JavaScript',
    },
    description: {
      fr: 'Logique, DOM, fonction, POO et premières interactions',
      en: 'Logic, DOM, functions, OOP and first interactions',
    },
  },
  {
    id: 'the-odin-project',
    icon: 'odin',
    title: {
      fr: 'The Odin Project',
      en: 'The Odin Project',
    },
    description: {
      fr: 'Fondations solides terminées',
      en: 'Solid foundations completed',
    },
  },
  {
    id: 'thp',
    icon: 'thp',
    title: {
      fr: 'THP',
      en: 'THP',
    },
    description: {
      fr: 'Début du parcours intensif en développement web',
      en: 'Start of the intensive web development path',
    },
  },
  {
    id: 'ruby',
    icon: 'ruby',
    title: {
      fr: 'Ruby',
      en: 'Ruby',
    },
    description: {
      fr: 'POO, scripts et premiers projets CLI',
      en: 'OOP, scripts and first CLI projects',
    },
  },
  {
    id: 'rails-sql',
    icon: 'rails',
    title: {
      fr: 'Rails & SQL',
      en: 'Rails & SQL',
    },
    description: {
      fr: 'MVC, base de données et CRUD',
      en: 'MVC, databases and CRUD',
    },
  },
  {
    id: 'full-stack',
    icon: 'fullstack',
    title: {
      fr: 'Full-stack',
      en: 'Full-stack',
    },
    description: {
      fr: 'Applications web complètes et logique produit',
      en: 'Complete web applications and product logic',
    },
  },
  {
    id: 'react-typescript-node',
    icon: 'react',
    title: {
      fr: 'React / TypeScript / NodeJS',
      en: 'React / TypeScript / NodeJS',
    },
    description: {
      fr: 'Front moderne et composants',
      en: 'Modern front-end and components',
    },
  },
  {
    id: 'today',
    icon: 'today',
    title: {
      fr: 'Aujourd’hui',
      en: 'Today',
    },
    description: {
      fr: 'Portfolio, projets concrets et progression continue',
      en: 'Portfolio, concrete projects and continuous progress',
    },
  },
]
