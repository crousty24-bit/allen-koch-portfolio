export type StackTech = {
  label: string
}

export type StackItem = {
  items: StackTech[]
  title: string
}

export const stack: StackItem[] = [
  {
    title: 'Frontend',
    items: [
      { label: 'React' },
      { label: 'Vite' },
      { label: 'TypeScript' },
      { label: 'JavaScript' },
      { label: 'Tailwind CSS' },
      { label: 'Shadcn' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'Ruby on Rails' },
      { label: 'Node.js' },
      { label: 'Express' },
      { label: 'NestJS' },
      { label: 'API REST' },
    ],
  },
  {
    title: 'Database',
    items: [{ label: 'SQLite' }, { label: 'PostgreSQL' }, { label: 'Prisma' }],
  },
  {
    title: 'Tools & Deployment',
    items: [
      { label: 'GitHub' },
      { label: 'VS Code' },
      { label: 'Codex' },
      { label: 'Claude' },
      { label: 'Ollama' },
      { label: 'Docker' },
      { label: 'Vercel' },
      { label: 'Tauri' },
    ],
  },
]
