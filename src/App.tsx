import { AboutSection } from './components/AboutSection/AboutSection'
import { ContactSection } from './components/ContactSection/ContactSection'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection'
import { StackSection } from './components/StackSection/StackSection'

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Aller au contenu
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <ProjectsSection />
        <StackSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
