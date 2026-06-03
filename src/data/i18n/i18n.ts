export type Language = 'fr' | 'en'
export type Theme = 'dark' | 'light'

export const copy = {
  fr: {
    about: {
      alt: "Portrait professionnel d'Allen Koch",
      eyebrow: 'About',
      heading: 'Hello, je suis Allen.',
      intro:
        'Développeur en reconversion, je construis des applications web utiles, lisibles et maintenables.',
      cards: [
        {
          title: 'Backend first',
          text: 'Logique métier · données · architecture',
        },
        {
          title: 'Product-minded',
          text: 'MVP · usage réel · amélioration continue',
        },
        {
          title: 'AI workflow',
          text: 'Automatisation · debug · code review',
        },
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
      statLabels: {
        contributions: 'Contributions',
        projects: 'Projets',
      },
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
      heading: "Hello, I'm Allen.",
      intro:
        'Career-switching developer, I build useful, readable and maintainable web applications.',
      cards: [
        {
          title: 'Backend first',
          text: 'Business logic · data · architecture',
        },
        {
          title: 'Product-minded',
          text: 'MVP · real usage · continuous improvement',
        },
        {
          title: 'AI workflow',
          text: 'Automation · debug · code review',
        },
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
      statLabels: {
        contributions: 'Contributions',
        projects: 'Projects',
      },
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
