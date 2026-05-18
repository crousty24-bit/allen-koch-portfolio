export type Project = {
  title: string
  description: string
  imageAlt: string
  imageSrc: string
  repositoryHref?: string
  stack: string[]
  status: string
  href?: string
}

export const projects: Project[] = [
  {
    title: 'Questonaut',
    description:
      "Tracker d'habitudes gamifié construit avec Ruby on Rails. L'objectif est de rendre la progression lisible, motivante et simple à maintenir.",
    imageAlt:
      'Interface dark mode de productivité avec cartes de suivi, barres de progression bleues et ambiance developer tool.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGvTqPtc7yaYRsQCMQcvx55iMfXdcZMbx0YjAo1EbxD5b6Vn6pNwhEDxkreCCT12mLrP3_E4hr4AFpoiPvMB4v77xFsvoJyNcAnWh1Li8V3mID8_uML3WTAo9JNSwmeTuv2JPR6HwSoFn7c9BKvassrpG1Q44FJtO3DAR425pAEg7TrKzc_W76R6hl5nDpHi2-i3EK9w-NFEylpYlN5MY3JeYmWcA_MocX9TiCyTzcQjZ0DOlenfh9hCLBoxlgTooJHmQhErdBRAQ',
    repositoryHref:
      'https://github.com/crousty24-bit/questonaut_habit_tracker_app',
    stack: ['Rails', 'Hotwire', 'Product UX'],
    status: 'MVP',
  },
  {
    title: 'Mission Control',
    description:
      'Application desktop Linux pour centraliser les workflows de développement, surveiller le système et garder le contexte technique au même endroit.',
    imageAlt:
      'Interface terminal futuriste avec lignes de code, syntaxe cyan et violet, et ambiance de poste de travail technique.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB8_jRuRxYXeQPY4NeNueWYMNCHctKfAkye6UlhXs9CpQ6U7Yq2AZ5sOstVDzC2WXKNvDb5q8zeujS23IF2lNV38lc0sSzO74f_WgWjr2-i1neACPijQxjnx_h-jl84dh7-L3-qBlE7bwb-bgPoRJPCJ1b0BklNQh9CwOmCwEkpRxqaL6m1frHNGizpqDsSHoocHGP-jbj8tvJ1jGXfplEB59JGinUCqoWExgPyRBc_ONVlma4dPW9gJQNk_CFXf4EgJtJtfs-mm-w',
    repositoryHref: 'https://github.com/crousty24-bit/mission-control',
    stack: ['Tauri', 'TypeScript', 'Linux'],
    status: 'Prototype',
  },
  {
    title: 'Kane',
    description:
      "Assistant IA local orienté confidentialité, pensé pour automatiser le tri, l'analyse et les tâches répétitives sans perdre le contrôle technique.",
    imageAlt:
      'Visualisation abstraite de reseaux IA avec filaments bleus lumineux sur un fond sombre.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAef8IfFjl9DtMoPk_VS4GZPSqZr3DMXo3trq0C6GLD-gbXojDU3b54_nHN3E2Hv6NN67pMABpO85UwXt-QNDkdOfy-6c_7TEJSQ1QxmsNOJrJxwUGTmAyU-el0SD6ePk62OJ5xiz82msqyKgby7Y39rnJEpPKsFWej3F_2dahVOzMNq1SzjLMPqTVEsNlpyQ_N0pbjYcFqePg8ol3Pu6IonB_HP1BwZQyEdIQEREqgbKoBTf9_hY7_s1K7XWf6j_wGi8JF5dmn3cQ',
    stack: ['AI Workflow', 'Automation', 'Privacy'],
    status: 'Exploration',
  },
  {
    title: 'Portfolio AK',
    description:
      'Le site portfolio actuel, conçu pour présenter clairement le profil, les projets et la progression technique avec une base React maintenable.',
    imageAlt:
      'Vue de bureau moderne avec clavier mécanique et écran affichant une interface portfolio dark mode.',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzHZDjSaWtDrkcA0l-4Z5vVhemXiEuxPWgOI_7UyTqjA7a50RBkI08Lzv467twbU28TlgYV9ACzjO1t3vAi2ylHtVmGSAL_AnWojSYKDao5MR7ogJ4BzvA0UHeHDAEzJYOKme3O7U-7dkSPzeTzwRggcEBqfCIb2TD1issZvjFVqWQQtslC_vVAWaqgTfW-rdPrAJ7NA-ZAzPzW8BvhBIXa9UBT8pu1YP0X04pE7M2gn3TBHKrgA9g8LfXD66wEMsh6_MdgmT3mTg',
    repositoryHref: 'https://github.com/crousty24-bit/allen-koch-portfolio',
    stack: ['React', 'Vite', 'TypeScript'],
    status: 'En cours',
  },
]
