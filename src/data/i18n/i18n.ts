export type Language = 'fr' | 'en'
export type Theme = 'dark' | 'light'

export const copy = {
  fr: {
    about: {
      alt: "Portrait professionnel d'Allen Koch",
      eyebrow: 'About',
      heading: "Hello, moi c'est Allen",
      paragraphs: [
        [
          { strong: true, text: 'Mon but :' },
          {
            text: " des applications web orientées produit avec une approche pragmatique. Comprendre le besoin, livrer un MVP clair, puis améliorer progressivement l'UX et la qualité technique.",
          },
        ],
        [
          { text: 'Ce que j’apprécie le plus ? ' },
          { strong: true, text: 'Résoudre des problèmes concrets' },
          { text: '.' },
        ],
        [
          {
            text: 'Le backend est mon terrain de jeu principal, parce qu’il oblige à ',
          },
          { strong: true, text: 'comprendre la logique métier' },
          { text: ' et construire des bases solides derrière l’interface.' },
        ],
        [
          { strong: true, text: 'Mon approche :' },
          {
            text: ' le code n’a de valeur que s’il répond à un enjeu réel : simplifier un usage, automatiser une tâche, fiabiliser un processus ou rendre un produit plus clair et plus utile.',
          },
        ],
      ],
      tags: ['France', 'Junior Fullstack'],
    },
    contact: {
      heading: 'Parlons de votre projet.',
      text: "Disponible pour discuter d'un projet web, d'un MVP ou d'une base technique à structurer proprement.",
      meta: {
        profile: ['Profil', 'Fullstack Junior'],
        focus: ['Focus', 'Rails / React'],
        location: ['Localisation', 'France'],
      },
    },
    footer: {
      brand: 'Allen Koch - Développeur Fullstack',
      copyright: '© 2026 Allen Koch. Tous droits réservés.',
      socialLabel: 'Liens sociaux footer',
    },
    hero: {
      status: 'Développeur Fullstack - React / Rails',
      heading: 'Développeur Fullstack. AI Builder',
      highlight: '',
      subtitle:
        'Je construis des expériences web fonctionnelles, structurées et maintenables, avec une approche orientée produit.',
      note: "Penser produit, coder proprement, livrer utile avec l'IA comme levier, pas comme raccourci.",
      projectsCta: 'Voir les projets',
      contactCta: 'Me contacter',
      statsLabel: 'Statistiques du hero',
      stats: [
        { label: 'Contributions', prefix: '+', value: 833 },
        { label: 'Projets', prefix: '', value: 5 },
      ],
    },
    nav: {
      home: 'Home',
      projects: 'Projets',
      stack: 'Stack',
      about: 'About',
      contact: 'Contact',
      mainLabel: 'Navigation principale',
      externalLabel: 'Liens externes',
      homeLabel: 'Allen Koch - accueil',
      openMenuLabel: 'Ouvrir le menu',
      closeMenuLabel: 'Fermer le menu',
      themeDarkLabel: 'Basculer en thème sombre',
      themeLightLabel: 'Basculer en thème clair',
      languageLabel: 'Passer le site en anglais',
    },
    projects: {
      eyebrow: 'Portfolio',
      heading: 'Build & Learn',
      text: 'Des projets concrets pour explorer des stacks, améliorer mon workflow et construire des solutions clients utiles.',
      showAllLabel: 'Afficher tous les projets',
      hideExtraLabel: 'Masquer les projets supplémentaires',
      ctaText: 'Une idée de projet ?',
      ctaLink: 'Se connecter',
      viewProject: 'Voir le projet',
      github: 'GitHub',
      view: 'Voir',
    },
    skipLink: 'Aller au contenu',
    stack: {
      eyebrow: 'Stack & skills',
      heading:
        'Une base technique solide, lisible et moderne, pensée pour construire et itérer.',
      text: "La stack met l'accent sur des outils que je peux comprendre, déployer et maintenir dans le temps.",
    },
    topButtonLabel: 'Remonter en haut de la page',
  },
  en: {
    about: {
      alt: 'Professional portrait of Allen Koch',
      eyebrow: 'About',
      heading: "Hello, I'm Allen",
      paragraphs: [
        [
          { strong: true, text: 'My goal:' },
          {
            text: ' build product-oriented web applications with a pragmatic approach. Understand the need, ship a clear MVP, then improve the UX and technical quality over time.',
          },
        ],
        [
          { text: 'What I enjoy most? ' },
          { strong: true, text: 'Solving concrete problems' },
          { text: '.' },
        ],
        [
          {
            text: 'Backend is my main playground because it requires me to ',
          },
          { strong: true, text: 'understand the business logic' },
          { text: ' and build solid foundations behind the interface.' },
        ],
        [
          { strong: true, text: 'My approach:' },
          {
            text: ' code only has value when it addresses a real need: simplifying a workflow, automating a task, making a process more reliable or making a product clearer and more useful.',
          },
        ],
      ],
      tags: ['France', 'Junior Fullstack'],
    },
    contact: {
      heading: "Let's talk about your project.",
      text: 'Available to discuss a web project, an MVP, or a technical foundation to structure cleanly.',
      meta: {
        profile: ['Profile', 'Junior Fullstack'],
        focus: ['Focus', 'Rails / React'],
        location: ['Location', 'France'],
      },
    },
    footer: {
      brand: 'Allen Koch - Fullstack Developer',
      copyright: '© 2026 Allen Koch. All rights reserved.',
      socialLabel: 'Footer social links',
    },
    hero: {
      status: 'Fullstack Developer - React / Rails',
      heading: 'Fullstack Developer. AI Builder',
      highlight: '',
      subtitle:
        'I build functional, structured and maintainable web experiences with a product-minded approach.',
      note: 'Think product, write clean code, ship useful work with AI as leverage, not as a shortcut.',
      projectsCta: 'View projects',
      contactCta: 'Contact me',
      statsLabel: 'Hero stats',
      stats: [
        { label: 'Contributions', prefix: '+', value: 833 },
        { label: 'Projects', prefix: '', value: 5 },
      ],
    },
    nav: {
      home: 'Home',
      projects: 'Projects',
      stack: 'Stack',
      about: 'About',
      contact: 'Contact',
      mainLabel: 'Main navigation',
      externalLabel: 'External links',
      homeLabel: 'Allen Koch - home',
      openMenuLabel: 'Open menu',
      closeMenuLabel: 'Close menu',
      themeDarkLabel: 'Switch to dark theme',
      themeLightLabel: 'Switch to light theme',
      languageLabel: 'Switch site to French',
    },
    projects: {
      eyebrow: 'Portfolio',
      heading: 'Build & Learn',
      text: 'Concrete projects to explore stacks, improve my workflow and build useful client solutions.',
      showAllLabel: 'Show all projects',
      hideExtraLabel: 'Hide extra projects',
      ctaText: 'Have a project idea?',
      ctaLink: 'Get in touch',
      viewProject: 'View project',
      github: 'GitHub',
      view: 'View',
    },
    skipLink: 'Skip to content',
    stack: {
      eyebrow: 'Stack & skills',
      heading:
        'A solid, readable and modern technical base designed to build and iterate.',
      text: 'The stack focuses on tools I can understand, deploy and maintain over time.',
    },
    topButtonLabel: 'Back to top',
  },
} as const
