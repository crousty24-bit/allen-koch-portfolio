import { useEffect, useState } from 'react'
import { AboutSection } from './components/AboutSection/AboutSection'
import { BackToTopButton } from './components/BackToTopButton/BackToTopButton'
import { ContactSection } from './components/ContactSection/ContactSection'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { StackSection } from './components/StackSection/StackSection'
import { copy, type Language, type Theme } from './data/i18n/i18n'
import { readStoredPreference, writeStoredPreference } from './utils/storage'

const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return readStoredPreference(
    () => window.localStorage,
    'theme',
    (value): value is Theme => value === 'dark' || value === 'light',
    'light',
  )
}

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'fr'
  }

  return readStoredPreference(
    () => window.localStorage,
    'language',
    (value): value is Language => value === 'fr' || value === 'en',
    'fr',
  )
}

function App() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)
  const [language, setLanguage] = useState<Language>(getStoredLanguage)
  const pageCopy = copy[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    writeStoredPreference(() => window.localStorage, 'theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy[language].hero.title
    writeStoredPreference(() => window.localStorage, 'language', language)
  }, [language])

  useEffect(() => {
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }

    const scrollSections = document.querySelectorAll<HTMLElement>(
      'main > .section:not(.hero)',
    )

    scrollSections.forEach((section) => {
      section.classList.add('section--scroll-fade')
    })

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('section--scroll-visible')
          sectionObserver.unobserve(entry.target)
        })
      },
      {
        threshold: 0,
      },
    )

    scrollSections.forEach((section) => {
      sectionObserver.observe(section)
    })

    return () => {
      sectionObserver.disconnect()
      scrollSections.forEach((section) => {
        section.classList.remove(
          'section--scroll-fade',
          'section--scroll-visible',
        )
      })
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">
        {pageCopy.skipLink}
      </a>
      <Navbar
        language={language}
        onToggleLanguage={() =>
          setLanguage((currentLanguage) =>
            currentLanguage === 'fr' ? 'en' : 'fr',
          )
        }
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === 'dark' ? 'light' : 'dark',
          )
        }
        theme={theme}
      />
      <main id="main-content">
        <Hero language={language} />
        <ProjectsSection language={language} />
        <StackSection language={language} />
        <AboutSection language={language} />
        <ContactSection language={language} />
      </main>
      <Footer language={language} />
      <BackToTopButton language={language} />
    </>
  )
}

export default App
