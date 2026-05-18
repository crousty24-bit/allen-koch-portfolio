export type StackTech = {
  icon: string
  iconColor?: string
  label: string
}

export type StackItem = {
  icon: string
  iconColor?: string
  items: StackTech[]
  title: string
  tone: 'primary' | 'secondary' | 'tertiary' | 'neutral'
}

export const stack: StackItem[] = [
  {
    title: 'Frontend',
    icon: 'react',
    items: [
      { label: 'React', icon: 'react' },
      { label: 'Vite', icon: 'vite' },
      { label: 'TypeScript', icon: 'typescript' },
      { label: 'JavaScript', icon: 'javascript' },
      { label: 'Tailwind CSS', icon: 'tailwindcss' },
    ],
    tone: 'primary',
  },
  {
    title: 'Backend',
    icon: 'rubyonrails',
    items: [
      { label: 'Ruby on Rails', icon: 'rubyonrails' },
      { label: 'Node.js', icon: 'nodedotjs' },
      { label: 'Express', icon: 'express', iconColor: 'E8ECF5' },
      { label: 'NestJS', icon: 'nestjs' },
    ],
    tone: 'secondary',
  },
  {
    title: 'Database',
    icon: 'postgresql',
    items: [
      { label: 'SQLite', icon: 'sqlite' },
      { label: 'PostgreSQL', icon: 'postgresql' },
      { label: 'Prisma', icon: 'prisma', iconColor: '8FA6C8' },
    ],
    tone: 'tertiary',
  },
  {
    title: 'Tools & Deployment',
    icon: 'github',
    iconColor: 'E8ECF5',
    items: [
      { label: 'GitHub', icon: 'github', iconColor: 'E8ECF5' },
      { label: 'Vercel', icon: 'vercel', iconColor: 'FFFFFF' },
      { label: 'Tauri', icon: 'tauri' },
    ],
    tone: 'neutral',
  },
]
