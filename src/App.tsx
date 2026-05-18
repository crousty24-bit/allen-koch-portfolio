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

const getStoredTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  return window.localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
}

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') {
    return 'fr'
  }

  return window.localStorage.getItem('language') === 'en' ? 'en' : 'fr'
}

function App() {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)
  const [language, setLanguage] = useState<Language>(getStoredLanguage)
  const pageCopy = copy[language]

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem('language', language)
  }, [language])

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
