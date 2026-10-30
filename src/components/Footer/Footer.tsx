import { copy, type Language } from '../../data/i18n/i18n'
import { legalCopy } from '../../data/legal/legal'
import { links } from '../../data/links/links'
import { navItems } from '../../data/links/navigation'
import { LegalNotices } from '../LegalNotices/LegalNotices'

type FooterProps = {
  language: Language
}

export function Footer({ language }: FooterProps) {
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
                  <a href={item.href}>{pageCopy.nav[item.key]}</a>
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
        </div>
        <p aria-hidden="true" className="site-footer__name">
          Allen Koch
        </p>
        <p className="site-footer__legal">{footerCopy.copyright}</p>
        <nav
          className="site-footer__legal-links"
          aria-label={legalCopy[language].legalTitle}
        >
          <a href="#legal-notice">{legalCopy[language].legalTitle}</a>
          <a href="#privacy">{legalCopy[language].privacyTitle}</a>
        </nav>
        <LegalNotices language={language} />
      </div>
    </footer>
  )
}
