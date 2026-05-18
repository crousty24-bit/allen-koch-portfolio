import type { Language } from '../i18n/i18n'

export type SkillItem = {
  title: string
  keywords: string[]
  description: Record<Language, string>
}

export const skills: SkillItem[] = [
  {
    title: 'Developer Workflow',
    keywords: ['Git', 'GitHub', 'CLI', 'Linux / WSL', 'Debug'],
    description: {
      fr: 'Travailler proprement, comprendre les erreurs, versionner le code et avancer avec méthode.',
      en: 'Work cleanly, understand errors, version code and move forward with method.',
    },
  },
  {
    title: 'Code Quality',
    keywords: ['Clean code', 'Naming', 'Architecture', 'Maintainability'],
    description: {
      fr: 'Écrire du code lisible, structuré, évolutif et compréhensible par une équipe.',
      en: 'Write readable, structured, scalable code that a team can understand.',
    },
  },
  {
    title: 'Product Mindset',
    keywords: ['MVP', 'User stories', 'UX clarity', 'Client needs'],
    description: {
      fr: "Partir du besoin réel, prioriser l'utile et construire des fonctionnalités utilisables.",
      en: 'Start from the real need, prioritize what is useful and build usable features.',
    },
  },
  {
    title: 'Delivery',
    keywords: ['Documentation', 'Deployment', 'Iteration', 'Agile workflow'],
    description: {
      fr: 'Livrer progressivement, documenter les choix et améliorer le projet par itérations.',
      en: 'Ship progressively, document choices and improve the project through iterations.',
    },
  },
  {
    title: 'AI Workflow',
    keywords: ['Codex', 'OpenClaw', 'Agentic tools', 'Automation', 'Review'],
    description: {
      fr: "Utiliser l'IA comme assistant de développement, de debug et d'automatisation, sans perdre la maîtrise technique.",
      en: 'Use AI as a development, debugging and automation assistant without losing technical control.',
    },
  },
]
