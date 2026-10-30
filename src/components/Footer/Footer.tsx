import { copy, type Language } from '../../data/i18n/i18n'
import { legalCopy, legalPaths } from '../../data/legal/legal'
import { links } from '../../data/links/links'
import { navItems } from '../../data/links/navigation'

type FooterProps = {
  language: Language
  linkBase?: string
}

export function Footer({ language, linkBase = '' }: FooterProps) {
  const socialLinks = links.filter((link) => link.kind === 'social')
  const pageCopy = copy[language]
  const footerCopy = pageCopy.footer

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__columns">
          <p className="site-footer__brand">{footerCopy.brand}</p>
          <nav
            aria-labelledby="footer-nav-heading"
            className="site-footer__column"
          >
            <h2 className="site-footer__heading" id="footer-nav-heading">
              {footerCopy.navHeading}
            </h2>
            <ul>
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={`${linkBase}${item.href}`}>
                    {pageCopy.nav[item.key]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            aria-labelledby="footer-links-heading"
            className="site-footer__column"
          >
            <h2 className="site-footer__heading" id="footer-links-heading">
              {footerCopy.linksHeading}
            </h2>
            <ul>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav
            aria-labelledby="footer-legal-heading"
            className="site-footer__column"
          >
            <h2 className="site-footer__heading" id="footer-legal-heading">
              {footerCopy.legalHeading}
            </h2>
            <ul>
              <li>
                <a href={legalPaths.legal}>{legalCopy[language].legalTitle}</a>
              </li>
              <li>
                <a href={legalPaths.privacy}>
                  {legalCopy[language].privacyTitle}
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p aria-hidden="true" className="site-footer__name">
          Allen Koch
        </p>
        <p className="site-footer__legal">{footerCopy.copyright}</p>
      </div>
    </footer>
  )
}
