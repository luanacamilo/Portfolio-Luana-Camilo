import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from './hooks/useLanguage'
import './App.css'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const copyByLanguage = {
  pt_BR: {
    brand: 'LC',
    homeLabel: 'Início',
    aboutLabel: 'Sobre',
    skillsLabel: 'Habilidades',
    projectsLabel: 'Projetos',
    contactLabel: 'Contato',
    heroEyebrow: 'Portfolio',
    location: 'Americana, SP, Brasil',
    aboutTitle: 'Sobre',
    aboutSummary:
      'Construo experiências web com foco em clareza, manutenção e entrega real. Meu trabalho combina frontend, backend e automação para resolver problemas de negócio com código limpo e interfaces consistentes.',
    glanceTitle: 'Visão geral',
    glanceItems: [
      { label: 'Base', value: 'Americana, SP - Brasil' },
      { label: 'Atualmente', value: 'Estágio em TI na Duall Engenharia' },
      { label: 'Foco', value: 'Full Stack, automação e integração' },
      { label: 'Formação', value: 'Ciência da Computação - FAM' },
    ],
    projectsIntro:
      'Projetos e frentes que representam a forma como eu penso produto, implementação e evolução técnica.',
    projectRoles: [
      'Frontend + Backend',
      'Automação e processos',
      'UI e performance',
    ],
    projectPeriods: ['Em andamento', 'Fluxos internos', 'Interface moderna'],
    skillsTitle: 'Ferramentas e stack',
    skillGroups: [
      {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'TypeScript', 'CSS responsivo'],
      },
      {
        title: 'Backend e dados',
        items: ['PHP', 'GraphQL', 'SQL', 'REST APIs'],
      },
      {
        title: 'Prática diária',
        items: ['Python', 'Git e GitHub', 'Automação', 'Código limpo'],
      },
    ],
    experienceTitle: 'Experiência',
    experienceIntro: 'Onde venho construindo repertório técnico e de produto.',
    recognitionTitle: 'Objetivos',
    recognitionItems: [
      'Crescer como desenvolvedora Full Stack em ambientes remotos e internacionais.',
      'Aprofundar arquitetura de software, manutenção e qualidade de código.',
      'Contribuir em produtos reais com times colaborativos e foco em impacto.',
    ],
    contactTitle: 'Vamos construir algo bom.',
    contactText:
      'Estou aberta a oportunidades, freelas e projetos interessantes. O jeito mais rápido de me encontrar hoje é por e-mail, LinkedIn ou GitHub.',
    contactLinks: [
      {
        label: 'Email',
        href: 'mailto:luanacamilotec@gmail.com',
        value: 'luanacamilotec@gmail.com',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/luana-camilo-b1b5a117a/',
        value: 'luana-camilo-b1b5a117a',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/luanacamilo',
        value: 'github.com/luanacamilo',
      },
    ],
    ctaPrimary: 'Ver projetos',
    ctaSecondary: 'Entrar em contato',
    footerSummary:
      'Desenvolvedora Full Stack com experiência prática em aplicações web, integrações e automação.',
    footerElsewhere: 'Em outros lugares',
    footerSite: 'Navegação',
    footerCopyright: 'Todos os direitos reservados.',
    languageLabel: 'EN',
  },
  en: {
    brand: 'LC',
    homeLabel: 'Home',
    aboutLabel: 'About',
    skillsLabel: 'Skills',
    projectsLabel: 'Projects',
    contactLabel: 'Contact',
    heroEyebrow: 'Portfolio',
    location: 'Americana, SP, Brazil',
    aboutTitle: 'About',
    aboutSummary:
      'I build web experiences with a strong focus on clarity, maintainability, and real delivery. My work blends frontend, backend, and automation to solve business problems with clean code and consistent interfaces.',
    glanceTitle: 'At a glance',
    glanceItems: [
      { label: 'Based in', value: 'Americana, SP - Brazil' },
      { label: 'Currently', value: 'IT Intern at Duall Engenharia' },
      { label: 'Focus', value: 'Full Stack, automation, and integration' },
      { label: 'Education', value: 'Computer Science - FAM' },
    ],
    projectsIntro:
      'Projects and workstreams that reflect how I approach product thinking, implementation, and technical growth.',
    projectRoles: [
      'Frontend + Backend',
      'Automation and operations',
      'UI and performance',
    ],
    projectPeriods: ['Ongoing', 'Internal workflows', 'Modern interface'],
    skillsTitle: 'Tools and stack',
    skillGroups: [
      {
        title: 'Frontend',
        items: ['React', 'JavaScript', 'TypeScript', 'Responsive CSS'],
      },
      {
        title: 'Backend and data',
        items: ['PHP', 'GraphQL', 'SQL', 'REST APIs'],
      },
      {
        title: 'Daily practice',
        items: ['Python', 'Git and GitHub', 'Automation', 'Clean code'],
      },
    ],
    experienceTitle: 'Experience',
    experienceIntro: 'Where I have been building technical and product depth.',
    recognitionTitle: 'Goals',
    recognitionItems: [
      'Grow as a Full Stack developer in remote and international environments.',
      'Deepen my software architecture, maintainability, and code quality skills.',
      'Contribute to real products with collaborative teams and clear impact.',
    ],
    contactTitle: "Let's build something good.",
    contactText:
      "I'm open to opportunities, freelance work, and interesting projects. The fastest way to reach me today is by email, LinkedIn, or GitHub.",
    contactLinks: [
      {
        label: 'Email',
        href: 'mailto:luanacamilotec@gmail.com',
        value: 'luanacamilotec@gmail.com',
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/luana-camilo-b1b5a117a/',
        value: 'luana-camilo-b1b5a117a',
      },
      {
        label: 'GitHub',
        href: 'https://github.com/luanacamilo',
        value: 'github.com/luanacamilo',
      },
    ],
    ctaPrimary: 'View projects',
    ctaSecondary: 'Get in touch',
    footerSummary:
      'Full Stack developer with hands-on experience in web apps, integrations, and automation.',
    footerElsewhere: 'Elsewhere',
    footerSite: 'Site',
    footerCopyright: 'All rights reserved.',
    languageLabel: 'PT',
  },
}

function App() {
  const { t, language, toggleLanguage } = useLanguage()
  const copy = copyByLanguage[language] || copyByLanguage.en
  const aboutItems = t('about.journeyItems') || []
  const projects = t('projects.projects') || []
  const currentYear = new Date().getFullYear()

  return (
    <div className="app-shell">
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary">
          <a href="#home">{copy.homeLabel}</a>
          <a href="#projects">{copy.projectsLabel}</a>
          <a href="#contact">{copy.contactLabel}</a>
          <a href="https://github.com/luanacamilo" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label="Toggle language"
          >
            {copy.languageLabel}
          </button>
          <span className="availability-status"><i />open to work</span>
        </div>
      </header>

      <main className="page-content">
        <motion.section id="home" className="hero-section" {...fadeIn}>
          <p className="section-kicker">luanacamilo</p>
          <div className="hero-copy">
            <h1>{t('hero.title')}</h1>
            <p className="hero-lead">{t('hero.description')}</p>
            <p className="hero-location">{copy.location}</p>
            <div className="hero-actions">
              <a href="#projects" className="button-link button-link-primary">
                {copy.ctaPrimary} <span aria-hidden="true">→</span>
              </a>
              <a href="#contact" className="button-link">
                {copy.ctaSecondary}
              </a>
            </div>
          </div>
          <a href="#about" className="scroll-indicator" aria-label="Scroll to about section">
            scroll <span aria-hidden="true">↓</span>
          </a>
        </motion.section>

        <motion.section id="about" className="content-section" {...fadeIn}>
          <p className="section-kicker">{copy.aboutTitle}</p>
          <h2>{t('about.title')}</h2>
          <div className="two-column-copy">
            <p>{t('about.intro1')}</p>
            <p>{t('about.intro2')}</p>
          </div>

          <div className="subsection-heading">
            <h3>{copy.glanceTitle}</h3>
          </div>
          <div className="glance-grid">
            {copy.glanceItems.map(item => (
              <div key={item.label} className="glance-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="content-section" {...fadeIn}>
          <p className="section-kicker">{copy.projectsLabel}</p>
          <h2>{t('projects.title')}</h2>
          <p className="section-intro">{copy.projectsIntro}</p>

          <div className="project-list">
            {projects.map((project, index) => (
              <article key={project.title} className="project-card">
                <div className="project-preview" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{copy.projectRoles[index] || t('hero.subtitle')}</span>
                    <span>{copy.projectPeriods[index] || copy.location}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.technologies.slice(0, 5).map(tech => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="content-section" {...fadeIn}>
          <p className="section-kicker">{copy.skillsLabel}</p>
          <h2>{copy.skillsTitle}</h2>
          <div className="skill-columns">
            {copy.skillGroups.map(group => (
              <div key={group.title} className="skill-column">
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section className="content-section" {...fadeIn}>
          <p className="section-kicker">{copy.experienceTitle}</p>
          <h2>{copy.experienceTitle}</h2>
          <p className="section-intro">{copy.experienceIntro}</p>
          <ol className="experience-list">
            {aboutItems.map(item => (
              <li key={`${item.title}-${item.company}`} className="experience-item">
                <div className="experience-year">{item.period}</div>
                <div className="experience-content">
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.title}</p>
                  <p className="experience-location">{item.location}</p>
                  <ul>
                    {item.description.map(point => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section className="content-section" {...fadeIn}>
          <p className="section-kicker">{copy.recognitionTitle}</p>
          <h2>{copy.recognitionTitle}</h2>
          <div className="recognition-list">
            {copy.recognitionItems.map(item => (
              <div key={item} className="recognition-card">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="content-section contact-section" {...fadeIn}>
          <div className="contact-panel">
            <h2>{copy.contactTitle}</h2>
            <p className="section-intro">{copy.contactText}</p>
            <div className="contact-links">
              {copy.contactLinks.map((link, index) => (
                <a
                  key={link.label}
                  className={`contact-link ${index === 0 ? 'contact-link-primary' : ''}`}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <span>{index === 0 ? '✦' : link.label}</span>
                  <strong>{index === 0 ? link.label : link.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="site-footer">
        <div>
          <a href="#home" className="footer-brand">
            luanacamilo.dev
          </a>
          <p>{copy.footerSummary}</p>
        </div>
        <div>
          <h3>{copy.footerElsewhere}</h3>
          <a href="mailto:luanacamilotec@gmail.com">Email</a>
          <a
            href="https://www.linkedin.com/in/luana-camilo-b1b5a117a/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com/luanacamilo" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <div>
          <h3>{copy.footerSite}</h3>
          <a href="#projects">{copy.projectsLabel}</a>
          <a href="#contact">{copy.contactLabel}</a>
        </div>
        <p className="footer-caption">
          © {currentYear} Luana Camilo. {copy.footerCopyright}
        </p>
      </footer>
    </div>
  )
}

export default App
