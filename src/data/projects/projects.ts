import type { Language } from '../i18n/i18n'

export type Project = {
  title: string
  description: Record<Language, string>
  imageAlt: Record<Language, string>
  imageSrc: string
  imageWebpSrcSet?: string
  repositoryHref?: string
  stack: string[]
  status: Record<Language, string>
  href?: string
} & (
  | { category: 'personal' | 'game-dev' }
  | {
      category: 'client'
      client: {
        name: string
        mission: Record<Language, string>
        role: Record<Language, string>
        deliverables: Record<Language, string>
        results?: Record<Language, string>
        publicationApproved: boolean
      }
    }
)

export function isProjectPublished(project: Project) {
  return project.category !== 'client' || project.client.publicationApproved
}

export const projects: Project[] = [
  {
    category: 'personal',
    title: 'Diff Impact Analyzer',
    description: {
      fr: 'Outil local qui analyse les changements Git et produit une évaluation déterministe et explicable de leur portée et de leur risque.',
      en: 'Local tool that analyzes Git changes and produces a deterministic, explainable assessment of their scope and risk.',
    },
    imageAlt: {
      fr: 'Rapport de Diff Impact Analyzer montrant les fichiers modifiés, le score de risque et les signaux expliqués.',
      en: 'Diff Impact Analyzer report showing changed files, risk score and explained signals.',
    },
    imageSrc: '/projects/diff-impact-analyzer-v2.png',
    imageWebpSrcSet:
      '/projects/generated/diff-impact-analyzer-v2-384.webp 384w, /projects/generated/diff-impact-analyzer-v2-512.webp 512w, /projects/generated/diff-impact-analyzer-v2-960.webp 960w, /projects/generated/diff-impact-analyzer-v2-1280.webp 1280w',
    repositoryHref: 'https://github.com/crousty24-bit/diff-impact-analyzer',
    stack: ['Node.js', 'TypeScript', 'React', 'Express'],
    status: { fr: 'MVP', en: 'MVP' },
    href: 'https://diff-impact-analyzer.vercel.app/',
  },
  {
    category: 'personal',
    title: 'SnipStack',
    description: {
      fr: 'Projet collaboratif. Bibliothèque de snippets avec une source frontend et serveur unique, disponible comme application web React et Rails ou comme application desktop Tauri.',
      en: 'Collaborative project. Snippet library with one frontend and server-side source of truth, available as a React and Rails web app or a Tauri desktop app.',
    },
    imageAlt: {
      fr: 'Interface sombre de SnipStack avec formulaire de création, recherche et bibliothèque de snippets de code.',
      en: 'Dark SnipStack interface with a creation form, search and code snippet library.',
    },
    imageSrc: '/projects/snipstack.png',
    imageWebpSrcSet:
      '/projects/generated/snipstack-384.webp 384w, /projects/generated/snipstack-512.webp 512w, /projects/generated/snipstack-960.webp 960w, /projects/generated/snipstack-1280.webp 1280w',
    repositoryHref: 'https://github.com/Naethr/SnipStack/tree/develop',
    stack: ['React', 'Rails', 'PostgreSQL', 'Tauri'],
    status: { fr: 'MVP (contributeur)', en: 'MVP (contributor)' },
  },
  {
    category: 'personal',
    title: 'Code Quality Guardian',
    description: {
      fr: 'Agent Skill qui encadre les interventions des agents de code : inspection préalable, portée limitée, comportement préservé et vérification honnête. Changer moins, mais mieux.',
      en: 'Agent Skill that guides coding agents to inspect first, limit scope, preserve behavior and report verification honestly. Change less, but better.',
    },
    imageAlt: {
      fr: "Page d'accueil sombre de Code Quality Guardian avec le titre « Govern how coding agents change code » et une chouette bleue.",
      en: 'Dark Code Quality Guardian homepage with the headline “Govern how coding agents change code” and a blue owl.',
    },
    imageSrc: '/projects/code-quality-guardian-v2.png',
    imageWebpSrcSet:
      '/projects/generated/code-quality-guardian-v2-384.webp 384w, /projects/generated/code-quality-guardian-v2-768.webp 768w, /projects/generated/code-quality-guardian-v2-960.webp 960w, /projects/generated/code-quality-guardian-v2-1280.webp 1280w',
    repositoryHref:
      'https://github.com/crousty24-bit/code-quality-guardian-skill',
    stack: ['Agent Skill', 'AI Workflow', 'Code Quality'],
    status: { fr: 'MVP (deprecated)', en: 'MVP (deprecated)' },
    href: 'https://code-quality-guardian.vercel.app/',
  },
  {
    category: 'personal',
    title: 'Sokwak AI',
    description: {
      fr: 'Projet collaboratif. “AI-assisted learning without solution dumping”. Une IA qui n’écrit pas la solution à ta place, mais t’aide à apprendre à la trouver.',
      en: 'Collaborative project. "AI-assisted learning without solution dumping". An AI that does not write the solution for you, but helps you learn how to find it.',
    },
    imageAlt: {
      fr: 'Logo Sokwak avec un canard jaune barbu sur fond noir.',
      en: 'Sokwak logo featuring a bearded yellow duck on a black background.',
    },
    imageSrc: '/projects/sokwak-ai-v2.png',
    imageWebpSrcSet:
      '/projects/generated/sokwak-ai-v2-384.webp 384w, /projects/generated/sokwak-ai-v2-512.webp 512w',
    stack: ['React', 'TypeScript', 'Prisma', 'AI Workflow'],
    status: { fr: 'MVP (contributeur)', en: 'MVP (contributor)' },
  },
  {
    category: 'personal',
    title: 'Portfolio AK',
    description: {
      fr: 'Le site portfolio actuel, conçu pour présenter clairement le profil, les projets et la progression technique avec une base React maintenable.',
      en: 'This portfolio site, designed to clearly present the profile, projects and technical progression with a maintainable React base.',
    },
    imageAlt: {
      fr: "Capture en thème clair de la page d'accueil du portfolio Allen Koch, avec le grand titre « ALLEN KOCH ».",
      en: 'Light theme screenshot of the Allen Koch portfolio homepage with the large “ALLEN KOCH” headline.',
    },
    imageSrc: '/projects/portfolio-ak-v2.png',
    imageWebpSrcSet:
      '/projects/generated/portfolio-ak-v2-384.webp 384w, /projects/generated/portfolio-ak-v2-512.webp 512w',
    repositoryHref: 'https://github.com/crousty24-bit/allen-koch-portfolio',
    stack: ['React', 'Vite', 'TypeScript'],
    status: { fr: 'En cours', en: 'In progress' },
  },
  {
    category: 'personal',
    title: 'Questonaut',
    description: {
      fr: "Tracker d'habitudes gamifié construit avec Ruby on Rails. L'objectif est de rendre la progression lisible, motivante et simple à maintenir.",
      en: 'Gamified habit tracker built with Ruby on Rails. The goal is to make progress readable, motivating and easy to maintain.',
    },
    imageAlt: {
      fr: 'Page de présentation de Questonaut avec le titre « Become the Commander of Your Habits » et un tableau de progression.',
      en: 'Questonaut landing page with the headline “Become the Commander of Your Habits” and a progress dashboard.',
    },
    imageSrc: '/projects/questonaut-v2.png',
    imageWebpSrcSet:
      '/projects/generated/questonaut-v2-384.webp 384w, /projects/generated/questonaut-v2-512.webp 512w',
    repositoryHref:
      'https://github.com/crousty24-bit/questonaut_habit_tracker_app',
    stack: ['Rails', 'Hotwire', 'Product UX'],
    status: { fr: 'MVP', en: 'MVP' },
  },
  {
    category: 'personal',
    title: 'Mission Control',
    description: {
      fr: 'Application desktop Linux pour centraliser les workflows de développement, surveiller le système et garder le contexte technique au même endroit.',
      en: 'Linux desktop application to centralize development workflows, monitor the system and keep technical context in one place.',
    },
    imageAlt: {
      fr: 'Tableau de bord Mission Control montrant les projets en cours, une liste de tâches et la répartition des statuts.',
      en: 'Mission Control dashboard showing projects in progress, a task list and status distribution.',
    },
    imageSrc: '/projects/mission-control-v2.png',
    imageWebpSrcSet:
      '/projects/generated/mission-control-v2-384.webp 384w, /projects/generated/mission-control-v2-512.webp 512w',
    repositoryHref: 'https://github.com/crousty24-bit/mission-control',
    stack: ['Tauri', 'TypeScript', 'Linux'],
    status: { fr: 'Prototype', en: 'Prototype' },
  },
  {
    category: 'personal',
    title: 'Kane',
    description: {
      fr: "Assistant IA local orienté confidentialité, pensé pour automatiser le tri, l'analyse et les tâches répétitives sans perdre le contrôle technique.",
      en: 'Local privacy-oriented AI assistant designed to automate sorting, analysis and repetitive tasks without losing technical control.',
    },
    imageAlt: {
      fr: 'Logo pixel art de Kane, profil robotique bleu et violet sur fond noir.',
      en: 'Kane pixel art logo featuring a blue and purple robotic profile on a black background.',
    },
    imageSrc: '/projects/kane-v2.png',
    imageWebpSrcSet:
      '/projects/generated/kane-v2-384.webp 384w, /projects/generated/kane-v2-512.webp 512w',
    stack: ['AI Workflow', 'Automation', 'Privacy'],
    status: { fr: 'Exploration', en: 'Exploration' },
  },
  {
    category: 'client',
    title: 'SEOS - Plateforme d’échange de services gratuits',
    description: {
      fr: 'Proposez un savoir-faire, trouvez un coup de main et créez des liens dans toute la communauté francophone.',
      en: 'Share your skills, find a helping hand and build connections throughout the French-speaking community.',
    },
    imageAlt: {
      fr: "Page d'accueil de SEOS avec le titre « Faites circuler l'entraide », une navigation et une recherche de services.",
      en: 'SEOS homepage with the headline “Faites circuler l’entraide”, navigation and service search.',
    },
    imageSrc: '/projects/seos.webp',
    stack: ['Rails', 'PostgreSQL'],
    status: {
      fr: 'Stage · première expérience client',
      en: 'Internship · first client project',
    },
    href: 'https://seos-exemple.thehackingproject.org/',
    client: {
      name: 'Seos',
      mission: {
        fr: 'Refonte complète du site d’échange de services gratuits.',
        en: 'Complete redesign of the free service exchange website.',
      },
      role: { fr: 'Développeur fullstack', en: 'Full-stack developer' },
      deliverables: {
        fr: 'Nouveau site, authentification et panneau d’administration.',
        en: 'New website, authentication and admin panel.',
      },
      publicationApproved: true,
    },
  },
  {
    category: 'game-dev',
    title: "Milady's Knight",
    description: {
      fr: "Milady's Knight est un action-platformer 2D en pixel-art Dark Fantasy, développé pour devenir une démo de dix niveaux conçus à la main. Le joueur incarne The Ashen Knight, traverse le royaume corrompu et rejoint Darkveil Dungeon pour vaincre Lupikal The Doombringer et libérer Princess Karla.",
      en: "Milady's Knight is a Dark Fantasy pixel-art 2D action-platformer being developed as a ten-level, handcrafted demo. Players become The Ashen Knight, cross the corrupted kingdom and reach Darkveil Dungeon to defeat Lupikal The Doombringer and free Princess Karla.",
    },
    imageAlt: {
      fr: "Capture de Milady's Knight : The Ashen Knight affronte des squelettes dans Darkveil Dungeon.",
      en: "Milady's Knight screenshot: The Ashen Knight faces skeletons in Darkveil Dungeon.",
    },
    imageSrc: '/projects/miladys-knight.png',
    imageWebpSrcSet:
      '/projects/generated/miladys-knight-384.webp 384w, /projects/generated/miladys-knight-768.webp 768w, /projects/generated/miladys-knight-960.webp 960w',
    stack: ['Godot', 'GDScript', 'demo-beta'],
    status: { fr: 'en développement', en: 'In development' },
  },
]
