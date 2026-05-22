import type { Language } from '../i18n/i18n'

export type SkillTreeIcon =
  | 'ai-workflow'
  | 'code-quality'
  | 'collaboration'
  | 'delivery'
  | 'engineering'
  | 'product'
  | 'product-mindset'
  | 'teamwork'
  | 'terminal'

export type SkillTreeNode = {
  id: string
  icon?: SkillTreeIcon
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
      icon: 'engineering',
      label: {
        fr: "Pratiques d'ingénierie",
        en: 'Engineering Practices',
      },
      children: [
        {
          id: 'developer-workflow',
          icon: 'terminal',
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
          icon: 'code-quality',
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
      icon: 'product',
      label: {
        fr: 'Produit & Livraison',
        en: 'Product & Delivery',
      },
      children: [
        {
          id: 'product-mindset',
          icon: 'product-mindset',
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
          icon: 'delivery',
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
      icon: 'teamwork',
      label: {
        fr: 'Collaboration moderne',
        en: 'Modern Collaboration',
      },
      children: [
        {
          id: 'ai-assisted-workflow',
          icon: 'ai-workflow',
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
          icon: 'collaboration',
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
