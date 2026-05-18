import { links } from '../../data/links/links'

export function Footer() {
  const socialLinks = links.filter((link) => link.kind === 'social')

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p>Allen Koch - Fullstack Developer</p>
        </div>
        <nav aria-label="Liens sociaux footer">
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p>© 2026 Allen Koch. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
