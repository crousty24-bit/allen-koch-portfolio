export type StackItem = {
  items: string[]
  summary: string
  title: string
  tone: 'primary' | 'secondary' | 'tertiary' | 'neutral'
}

export const stack: StackItem[] = [
  {
    title: 'Frontend',
    summary: 'Interfaces React lisibles, rapides et faciles à faire évoluer.',
    items: ['React', 'Vite', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    tone: 'primary',
  },
  {
    title: 'Backend',
    summary: 'APIs et applications web construites avec une logique produit.',
    items: ['Ruby on Rails', 'Node.js', 'Express', 'NestJS'],
    tone: 'secondary',
  },
  {
    title: 'Database',
    summary: 'Modélisation simple, migrations propres et données exploitables.',
    items: ['SQLite', 'PostgreSQL', 'Prisma'],
    tone: 'tertiary',
  },
  {
    title: 'Tools & Deployment',
    summary: 'Versionner, deployer et livrer avec un workflow reproductible.',
    items: ['GitHub', 'Vercel', 'Tauri'],
    tone: 'neutral',
  },
  {
    title: 'AI Workflow',
    summary: "Utiliser l'IA pour accélérer sans perdre la maîtrise technique.",
    items: ['Codex', 'OpenClaw Agents'],
    tone: 'primary',
  },
]
