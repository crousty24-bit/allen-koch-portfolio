import { useEffect, useRef, useState } from 'react'
import { copy, type Language, type Theme } from '../../data/i18n/i18n'
import { navItems } from '../../data/links/navigation'

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
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement>(null)
  const navCopy = copy[language].nav

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuToggleRef.current?.focus()
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className={`navbar${isMenuOpen ? ' navbar--menu-open' : ''}`}>
        <a className="brand" href="#home" aria-label={navCopy.homeLabel}>
          <span aria-hidden="true" className="brand__mark">
            AK
          </span>
          <span>Allen Koch</span>
        </a>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={
            isMenuOpen ? navCopy.closeMenuLabel : navCopy.openMenuLabel
          }
          className="menu-toggle"
          onClick={() => setIsMenuOpen((currentMenu) => !currentMenu)}
          ref={menuToggleRef}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className="navbar__menu" id="mobile-navigation">
          <nav aria-label={navCopy.mainLabel} className="navbar__links">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
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
                      strokeLinecap="square"
                      strokeLinejoin="miter"
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
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      strokeWidth="1.6"
                    />
                  </svg>
                )}
              </button>
              <button
                aria-label={navCopy.languageLabel}
                className="language-toggle"
                onClick={onToggleLanguage}
                type="button"
              >
                {(['fr', 'en'] as const).map((code) => (
                  <span
                    aria-hidden="true"
                    className={`language-toggle__option${
                      code === language
                        ? ' language-toggle__option--active'
                        : ''
                    }`}
                    key={code}
                  >
                    {code.toUpperCase()}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
