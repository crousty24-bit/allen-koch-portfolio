import type { Language } from '../i18n/i18n'

export type AboutAccordionItem = {
  answer: Record<Language, string>
  id: string
  question: Record<Language, string>
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
