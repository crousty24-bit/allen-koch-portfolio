export type LinkItem = {
  label: string
  href: string
  kind: 'social' | 'email'
}

export const links: LinkItem[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/crousty24-bit',
    kind: 'social',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/allen-koch-41290417b',
    kind: 'social',
  },
  {
    label: 'X',
    href: 'https://x.com/crousty24',
    kind: 'social',
  },
  {
    label: 'Email',
    href: 'mailto:allen.kch24@gmail.com',
    kind: 'email',
  },
]
