import { copy, type Language } from '../../data/i18n/i18n'
import { links } from '../../data/links/links'

type FooterProps = {
  language: Language
}

export function Footer({ language }: FooterProps) {
  const socialLinks = links.filter((link) => link.kind === 'social')
  const footerCopy = copy[language].footer

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p>{footerCopy.brand}</p>
        </div>
        <nav aria-label={footerCopy.socialLabel}>
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
        <p>{footerCopy.copyright}</p>
      </div>
    </footer>
  )
}
