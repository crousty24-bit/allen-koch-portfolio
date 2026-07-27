import type { Language } from '../i18n/i18n'

export type Project = {
  title: string
  description: Record<Language, string>
  imageAlt: Record<Language, string>
  imageSrc: string
  imageSizes?: string
  imageWebpSrcSet?: string
  repositoryHref?: string
  stack: string[]
  status: Record<Language, string>
  href?: string
}

const projectCardImageSizes =
  '(max-width: 760px) calc(100vw - 2.2rem), (max-width: 1040px) calc((100vw - 4.25rem) / 2), 397px'

export const projects: Project[] = [
  {
    title: 'Diff Impact Analyzer',
    description: {
      fr: 'Outil local qui analyse les changements Git et produit une évaluation déterministe et explicable de leur portée et de leur risque.',
      en: 'Local tool that analyzes Git changes and produces a deterministic, explainable assessment of their scope and risk.',
    },
    imageAlt: {
      fr: "Landing page sombre de Diff Impact Analyzer avec son interface d'analyse de la portée et du score d'impact des changements Git.",
      en: 'Dark Diff Impact Analyzer landing page showing its Git change scope and impact score interface.',
    },
    imageSrc: '/projects/diff-impact-analyzer.png',
    imageSizes: projectCardImageSizes,
    imageWebpSrcSet:
      '/projects/generated/diff-impact-analyzer-384.webp 384w, /projects/generated/diff-impact-analyzer-512.webp 512w',
    repositoryHref: 'https://github.com/crousty24-bit/diff-impact-analyzer',
    stack: ['Node.js', 'TypeScript', 'React', 'Express'],
    status: { fr: 'MVP', en: 'MVP' },
    href: 'https://diff-impact-analyzer.vercel.app/',
  },
  {
    title: 'SnipStack',
    description: {
      fr: 'Bibliothèque de snippets avec une source frontend et serveur unique, disponible comme application web React et Rails ou comme application desktop Tauri.',
      en: 'Snippet library with one frontend and server-side source of truth, available as a React and Rails web app or a Tauri desktop app.',
    },
    imageAlt: {
      fr: 'Interface sombre de SnipStack avec formulaire de création, recherche et bibliothèque de snippets de code.',
      en: 'Dark SnipStack interface with a creation form, search and code snippet library.',
    },
    imageSrc: '/projects/snipstack.png',
    imageSizes: projectCardImageSizes,
    imageWebpSrcSet:
      '/projects/generated/snipstack-384.webp 384w, /projects/generated/snipstack-512.webp 512w',
    repositoryHref: 'https://github.com/Naethr/SnipStack/tree/develop',
    stack: ['React', 'Rails', 'PostgreSQL', 'Tauri'],
    status: { fr: 'MVP', en: 'MVP' },
  },
  {
    title: 'Code Quality Guardian',
    description: {
      fr: 'Agent Skill qui encadre les interventions des agents de code : inspection préalable, portée limitée, comportement préservé et vérification honnête. Changer moins, mais mieux.',
      en: 'Agent Skill that guides coding agents to inspect first, limit scope, preserve behavior and report verification honestly. Change less, but better.',
    },
    imageAlt: {
      fr: "Page d'accueil sombre de Code Quality Guardian avec le message « Make coding agents change less, but better ».",
      en: 'Dark Code Quality Guardian homepage displaying the message “Make coding agents change less, but better”.',
    },
    imageSrc: '/projects/code-quality-guardian.png',
    imageSizes: projectCardImageSizes,
    imageWebpSrcSet:
      '/projects/generated/code-quality-guardian-384.webp 384w, /projects/generated/code-quality-guardian-768.webp 768w',
    repositoryHref:
      'https://github.com/crousty24-bit/code-quality-guardian-skill',
    stack: ['Agent Skill', 'AI Workflow', 'Code Quality'],
    status: { fr: 'En cours', en: 'In progress' },
    href: 'https://code-quality-guardian.vercel.app/',
  },
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
    imageSizes: projectCardImageSizes,
    imageWebpSrcSet:
      '/projects/generated/questonaut-384.webp 384w, /projects/generated/questonaut-512.webp 512w',
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
    imageSizes: projectCardImageSizes,
    imageWebpSrcSet:
      '/projects/generated/mission-control-384.webp 384w, /projects/generated/mission-control-512.webp 512w',
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
    imageSizes: projectCardImageSizes,
    imageWebpSrcSet:
      '/projects/generated/kane-384.webp 384w, /projects/generated/kane-512.webp 512w',
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
    imageSizes: projectCardImageSizes,
    imageWebpSrcSet:
      '/projects/generated/portfolio-ak-384.webp 384w, /projects/generated/portfolio-ak-512.webp 512w',
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
