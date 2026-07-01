export type Language = 'fr' | 'en'
export type Theme = 'dark' | 'light'

export const copy = {
  fr: {
    about: {
      alt: "Portrait professionnel d'Allen Koch",
      eyebrow: 'About',
      heading: "Bonjour, moi c'est Allen.",
      badges: ['France', 'Fullstack Developer', 'AI-assisted workflows'],
      intro: [
        'Développeur en reconversion, je construis des applications web utiles, lisibles et maintenables.',
        "J'aime comprendre les besoins derrière un projet, avancer avec méthode et créer des interfaces simples à utiliser.",
        "Ce qui me motive : simplifier l'expérience utilisateur et livrer quelque chose qui fonctionne vraiment.",
      ],
    },
    contact: {
      heading: 'Parlons de votre projet.',
      text: "Disponible pour discuter d'un projet web, d'un MVP ou d'une base technique à structurer proprement.",
      meta: {
        profile: ['Profil', 'Fullstack'],
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
      status: 'Développeur Fullstack / AI Builder',
      heading:
        'Je transforme les idées en produits web et workflows IA utilisables',
      highlight: '',
      subtitle:
        "J'aide à construire des expériences web fonctionnelles, structurées et maintenables, avec une approche produit et des workflows IA utiles.",
      projectsCta: 'Voir les projets',
      contactCta: 'Me contacter',
      statsLabel: 'Statistiques du hero',
      statLabels: {
        profile: 'Profile',
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
      text: 'Des projets concrets conçus pour répondre à des besoins réels, avec une approche produit, une structure claire et un code maintenable.',
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
      heading: 'Une base technique solide, lisible et moderne.',
      text: "La stack met l'accent sur des outils que je peux comprendre, déployer et maintenir dans le temps.",
    },
    topButtonLabel: 'Remonter en haut de la page',
  },
  en: {
    about: {
      alt: 'Professional portrait of Allen Koch',
      eyebrow: 'About',
      heading: "Hello, I'm Allen.",
      badges: ['France', 'Fullstack Developer', 'AI-assisted workflows'],
      intro: [
        'Career-switching developer, I build useful, readable and maintainable web applications.',
        'I like understanding the needs behind a project, moving forward with method and creating interfaces that are simple to use.',
        'What motivates me: simplifying the user experience and shipping something that truly works.',
      ],
    },
    contact: {
      heading: "Let's talk about your project.",
      text: 'Available to discuss a web project, an MVP, or a technical foundation to structure cleanly.',
      meta: {
        profile: ['Profile', 'Fullstack'],
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
      status: 'Fullstack Developer / AI Builder',
      heading: 'I turn ideas into usable web products and AI workflows',
      highlight: '',
      subtitle:
        'I help build functional, structured and maintainable web experiences with a product-minded approach and useful AI workflows.',
      projectsCta: 'View projects',
      contactCta: 'Contact me',
      statsLabel: 'Hero stats',
      statLabels: {
        profile: 'Profile',
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
      text: 'Concrete projects designed to meet real needs, with a product-minded approach, clear structure and maintainable code.',
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
