import type { Language } from '../i18n/i18n'

export type Service = {
  id: string
  title: Record<Language, string>
  description: Record<Language, string>
}

export const services: Service[] = [
  {
    id: 'web',
    title: {
      fr: 'Sites et applications web',
      en: 'Websites & applications',
    },
    description: {
      fr: "Je développe des solutions complètes, d'interfaces intuitives à des backends robustes. J'utilise des technologies modernes et des principes de conception solides pour créer des applications web concrètes, rapides, stables et capables d'évoluer avec vos besoins.",
      en: 'I build end-to-end solutions, from intuitive frontend experiences to robust backend systems. Using modern technologies and solid engineering principles, I create real-world web applications that stay fast, stable and scale with your needs.',
    },
  },
  {
    id: 'ai-workflows',
    title: {
      fr: "Développement assisté par l'IA & workflows agents",
      en: 'AI-assisted development & agent workflows',
    },
    description: {
      fr: "J'utilise les outils IA et les workflows agents pour accélérer le développement tout en maintenant des standards d'ingénierie solides, du prototypage rapide aux systèmes structurés et évolutifs.",
      en: 'I use AI tools and agent workflows to speed up development while maintaining solid engineering standards, from rapid prototyping to scalable, well-structured systems.',
    },
  },
]
