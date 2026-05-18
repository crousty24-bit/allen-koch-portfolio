import akLogo from '../../assets/images/ak-logo.png'
import { links } from '../../data/links/links'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projets', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const socialLinks = links.filter((link) => link.kind === 'social')

  return (
    <header className="site-header">
      <div className="navbar">
        <a className="brand" href="#home" aria-label="Allen Koch - accueil">
          <img
            src={akLogo}
            alt=""
            className="brand__logo"
            fetchPriority="high"
            height="512"
            width="512"
          />
          <span>Allen Koch</span>
        </a>

        <nav aria-label="Navigation principale" className="navbar__links">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <nav aria-label="Liens externes" className="navbar__actions">
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
      </div>
    </header>
  )
}
