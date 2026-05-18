import { links } from '../../data/links/links'

const portraitSrc =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBnb2o2eB0RRPXSt-YPMUQUpuJU4Y516CQKkpaYgjGrfWjJ1rSVu-2oR80SsS2SOrVt-rLdmEkwYZ4PZkRfdtnOiHB__ytImQ8_9Zj_xjSd3WrMA0boWynM5-zCGt0spK8-M5g3mqAZSUyZ_a2hKUdfRY5WLaelEMwmImszso7AKDrU6rP_1FxEe-C8sX0Tr9NTZKR8i8FlozYImst20XYVsIAgsGdTETqMhf2_x-RsF-Fb-YNhDsP0tv8TVqssa0kg27QDn653Qao'

export function AboutSection() {
  const socialLinks = links.filter((link) => link.kind === 'social')

  return (
    <section className="section about-section" id="about">
      <div className="about-layout">
        <div className="about-visual reveal">
          <div aria-hidden="true" className="about-visual__glow" />
          <figure className="portrait-card">
            <img
              src={portraitSrc}
              alt="Portrait professionnel d'Allen Koch"
              height="1280"
              loading="lazy"
              width="1024"
            />
          </figure>
          <div className="floating-tags">
            <span>France</span>
            <span>Junior Fullstack</span>
          </div>
        </div>

        <div className="about-content reveal">
          <p className="eyebrow">About</p>
          <h2>Développeur fullstack junior, pragmatique et orienté produit.</h2>
          <div className="about-copy">
            <p>
              Je construis des applications web orientées produit avec une
              approche pragmatique : comprendre le besoin, livrer un MVP clair,
              puis améliorer progressivement l'expérience utilisateur et la
              qualité technique.
            </p>
            <p>
              Ma stack principale combine Rails, React et TypeScript, avec un
              workflow renforcé par les outils d'automatisation IA. Je cherche à
              créer des projets utiles, maintenables et réellement utilisables.
            </p>
          </div>

          <div className="social-row">
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
          </div>
        </div>
      </div>
    </section>
  )
}
