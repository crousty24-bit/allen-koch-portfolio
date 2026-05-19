import akLogo from '../../assets/images/ak-logo.png'
import { copy, type Language, type Theme } from '../../data/i18n/i18n'

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'projects', href: '#projects' },
  { key: 'stack', href: '#stack' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
] as const

type NavbarProps = {
  language: Language
  onToggleLanguage: () => void
  onToggleTheme: () => void
  theme: Theme
}

export function Navbar({
  language,
  onToggleLanguage,
  onToggleTheme,
  theme,
}: NavbarProps) {
  const navCopy = copy[language].nav

  return (
    <header className="site-header">
      <div className="navbar">
        <a className="brand" href="#home" aria-label={navCopy.homeLabel}>
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

        <nav aria-label={navCopy.mainLabel} className="navbar__links">
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>
              {navCopy[item.key]}
            </a>
          ))}
        </nav>

        <div className="navbar__controls">
          <div className="navbar__toggles">
            <button
              aria-label={
                theme === 'dark'
                  ? navCopy.themeLightLabel
                  : navCopy.themeDarkLabel
              }
              className="icon-toggle"
              onClick={onToggleTheme}
              type="button"
            >
              {theme === 'dark' ? (
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="18"
                  viewBox="0 0 18 18"
                  width="18"
                >
                  <path
                    d="M9 2V3.5M9 14.5V16M4.05 4.05L5.1 5.1M12.9 12.9L13.95 13.95M2 9H3.5M14.5 9H16M4.05 13.95L5.1 12.9M12.9 5.1L13.95 4.05M12 9A3 3 0 1 1 6 9A3 3 0 0 1 12 9Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="18"
                  viewBox="0 0 18 18"
                  width="18"
                >
                  <path
                    d="M14.5 11.4C13.6 12.25 12.39 12.75 11.05 12.75A5.8 5.8 0 0 1 5.25 6.95C5.25 5.61 5.75 4.4 6.6 3.5A6 6 0 1 0 14.5 11.4Z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  />
                </svg>
              )}
            </button>
            <button
              aria-label={navCopy.languageLabel}
              className="icon-toggle icon-toggle--language"
              onClick={onToggleLanguage}
              type="button"
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="14"
                viewBox="0 0 18 18"
                width="14"
              >
                <path
                  d="M2.25 9H15.75M9 2.25C10.65 4.05 11.55 6.33 11.55 9C11.55 11.67 10.65 13.95 9 15.75M9 2.25C7.35 4.05 6.45 6.33 6.45 9C6.45 11.67 7.35 13.95 9 15.75M15.75 9A6.75 6.75 0 1 1 2.25 9A6.75 6.75 0 0 1 15.75 9Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.35"
                />
              </svg>
              {language === 'fr' ? 'EN' : 'FR'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
