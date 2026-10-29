import type { Language } from '../i18n/i18n'

export type SkillTreeNode = {
  id: string
  label: Record<Language, string>
  children?: SkillTreeNode[]
  keywords?: Record<Language, string[]>
}

export const skillsTree: SkillTreeNode = {
  id: 'skills',
  label: {
    fr: 'Compétences',
    en: 'Skills',
  },
  children: [
    {
      id: 'engineering-practices',
      label: {
        fr: "Pratiques d'ingénierie",
        en: 'Engineering Practices',
      },
      children: [
        {
          id: 'developer-workflow',
          label: {
            fr: 'Workflow développeur',
            en: 'Developer Workflow',
          },
          keywords: {
            fr: ['Git', 'GitHub', 'CLI', 'Linux / WSL', 'Débogage'],
            en: ['Git', 'GitHub', 'CLI', 'Linux / WSL', 'Debugging'],
          },
        },
        {
          id: 'code-quality',
          label: {
            fr: 'Qualité du code',
            en: 'Code Quality',
          },
          keywords: {
            fr: [
              'Clean code',
              'Naming',
              'Architecture simple',
              'Maintenabilité',
            ],
            en: [
              'Clean code',
              'Naming',
              'Simple architecture',
              'Maintainability',
            ],
          },
        },
      ],
    },
    {
      id: 'product-delivery',
      label: {
        fr: 'Produit & Livraison',
        en: 'Product & Delivery',
      },
      children: [
        {
          id: 'product-mindset',
          label: {
            fr: 'Approche produit',
            en: 'Product Mindset',
          },
          keywords: {
            fr: ['MVP', 'User stories', 'Clarté UX', 'Priorisation'],
            en: ['MVP', 'User stories', 'UX clarity', 'Prioritization'],
          },
        },
        {
          id: 'delivery',
          label: {
            fr: 'Livraison',
            en: 'Delivery',
          },
          keywords: {
            fr: ['Déploiement', 'Documentation', 'Itération', 'Workflow agile'],
            en: ['Deployment', 'Documentation', 'Iteration', 'Agile workflow'],
          },
        },
      ],
    },
    {
      id: 'modern-collaboration',
      label: {
        fr: 'Collaboration moderne',
        en: 'Modern Collaboration',
      },
      children: [
        {
          id: 'ai-assisted-workflow',
          label: {
            fr: 'Workflow assisté par IA',
            en: 'AI-Assisted Workflow',
          },
          keywords: {
            fr: [
              'Codex',
              'Outils agentiques',
              'Automatisation',
              'Revue de code',
            ],
            en: ['Codex', 'Agentic tools', 'Automation', 'Code review'],
          },
        },
        {
          id: 'collaboration',
          label: {
            fr: 'Collaboration',
            en: 'Collaboration',
          },
          keywords: {
            fr: [
              'Communication',
              'Feedback',
              'Autonomie',
              'Résolution de problèmes',
            ],
            en: ['Communication', 'Feedback', 'Autonomy', 'Problem solving'],
          },
        },
      ],
    },
  ],
}
