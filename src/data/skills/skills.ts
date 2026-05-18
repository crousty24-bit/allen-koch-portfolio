export type SkillItem = {
  title: string
  keywords: string[]
  description: string
}

export const skills: SkillItem[] = [
  {
    title: 'Developer Workflow',
    keywords: ['Git', 'GitHub', 'CLI', 'Linux / WSL', 'Debug'],
    description:
      'Travailler proprement, comprendre les erreurs, versionner le code et avancer avec méthode.',
  },
  {
    title: 'Code Quality',
    keywords: ['Clean code', 'Naming', 'Architecture', 'Maintainability'],
    description:
      'Écrire du code lisible, structuré, évolutif et compréhensible par une équipe.',
  },
  {
    title: 'Product Mindset',
    keywords: ['MVP', 'User stories', 'UX clarity', 'Client needs'],
    description:
      "Partir du besoin réel, prioriser l'utile et construire des fonctionnalités utilisables.",
  },
  {
    title: 'Delivery',
    keywords: ['Documentation', 'Deployment', 'Iteration', 'Agile workflow'],
    description:
      'Livrer progressivement, documenter les choix et améliorer le projet par itérations.',
  },
  {
    title: 'AI Workflow',
    keywords: ['Codex', 'Agentic tools', 'Automation', 'Review'],
    description:
      "Utiliser l'IA comme assistant de développement, de debug et d'automatisation, sans perdre la maîtrise technique.",
  },
]
