import type { Language } from '../i18n/i18n'

export type Project = {
  title: string
  description: Record<Language, string>
  imageAlt: Record<Language, string>
  imageSrc: string
  repositoryHref?: string
  stack: string[]
  status: Record<Language, string>
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Questonaut',
    description: {
      fr: "Tracker d'habitudes gamifié construit avec Ruby on Rails. L'objectif est de rendre la progression lisible, motivante et simple à maintenir.",
      en: 'Gamified habit tracker built with Ruby on Rails. The goal is to make progress readable, motivating and easy to maintain.',
    },
    imageAlt: {
      fr: 'Interface dark mode de productivité avec cartes de suivi, barres de progression bleues et ambiance developer tool.',
      en: 'Dark productivity interface with tracking cards, blue progress bars and a developer-tool atmosphere.',
    },
    imageSrc: '/projects/questonaut.png',
    repositoryHref:
      'https://github.com/crousty24-bit/questonaut_habit_tracker_app',
    stack: ['Rails', 'Hotwire', 'Product UX'],
    status: { fr: 'MVP', en: 'MVP' },
  },
  {
    title: 'Mission Control',
    description: {
      fr: 'Application desktop Linux pour centraliser les workflows de développement, surveiller le système et garder le contexte technique au même endroit.',
      en: 'Linux desktop application to centralize development workflows, monitor the system and keep technical context in one place.',
    },
    imageAlt: {
      fr: 'Interface terminal futuriste avec lignes de code, syntaxe cyan et violet, et ambiance de poste de travail technique.',
      en: 'Futuristic terminal interface with code lines, cyan and violet syntax, and a technical workstation mood.',
    },
    imageSrc: '/projects/mission-control.png',
    repositoryHref: 'https://github.com/crousty24-bit/mission-control',
    stack: ['Tauri', 'TypeScript', 'Linux'],
    status: { fr: 'Prototype', en: 'Prototype' },
  },
  {
    title: 'Sokwak AI',
    description: {
      fr: '“AI-assisted learning without solution dumping”. Une IA qui n’écrit pas la solution à ta place, mais t’aide à apprendre à la trouver.',
      en: '"AI-assisted learning without solution dumping". An AI that does not write the solution for you, but helps you learn how to find it.',
    },
    imageAlt: {
      fr: 'Interface sombre de mentor IA avec code, bulles de guidance et signaux de workflow.',
      en: 'Dark AI mentor interface with code, guidance bubbles and workflow signals.',
    },
    imageSrc: '/projects/rubber-duck-ia.svg',
    stack: ['React', 'TypeScript', 'Prisma', 'AI Workflow'],
    status: { fr: 'En cours', en: 'In progress' },
  },
  {
    title: 'Kane',
    description: {
      fr: "Assistant IA local orienté confidentialité, pensé pour automatiser le tri, l'analyse et les tâches répétitives sans perdre le contrôle technique.",
      en: 'Local privacy-oriented AI assistant designed to automate sorting, analysis and repetitive tasks without losing technical control.',
    },
    imageAlt: {
      fr: 'Visualisation abstraite de reseaux IA avec filaments bleus lumineux sur un fond sombre.',
      en: 'Abstract AI network visualization with luminous blue filaments on a dark background.',
    },
    imageSrc: '/projects/kane.png',
    stack: ['AI Workflow', 'Automation', 'Privacy'],
    status: { fr: 'Exploration', en: 'Exploration' },
  },
  {
    title: 'Portfolio AK',
    description: {
      fr: 'Le site portfolio actuel, conçu pour présenter clairement le profil, les projets et la progression technique avec une base React maintenable.',
      en: 'This portfolio site, designed to clearly present the profile, projects and technical progression with a maintainable React base.',
    },
    imageAlt: {
      fr: 'Vue de bureau moderne avec clavier mécanique et écran affichant une interface portfolio dark mode.',
      en: 'Modern desk view with a mechanical keyboard and a screen showing a dark-mode portfolio interface.',
    },
    imageSrc: '/projects/portfolio-ak.png',
    repositoryHref: 'https://github.com/crousty24-bit/allen-koch-portfolio',
    stack: ['React', 'Vite', 'TypeScript'],
    status: { fr: 'En cours', en: 'In progress' },
  },
  {
    title: 'HabitFlower',
    description: {
      fr: "Une application web mobile-first de suivi d'habitudes gamifiée, inspirée de l'univers cosy farming game en pixel art.",
      en: 'A mobile-first gamified habit-tracking web app inspired by the cosy farming game world in pixel art.',
    },
    imageAlt: {
      fr: "Interface pixel art mobile-first avec fleurs, suivi d'habitudes et ambiance cosy farming game.",
      en: 'Mobile-first pixel-art interface with flowers, habit tracking and a cosy farming game atmosphere.',
    },
    imageSrc: '/projects/habitflower.svg',
    stack: ['React', 'Vite', 'TypeScript', 'NestJS'],
    status: { fr: 'En cours', en: 'In progress' },
  },
]
