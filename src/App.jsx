import { useState } from 'react'
import { featuredProjects, foundationProjects, skillGroups } from './data/projects'
import './App.css'

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>
}

function ProjectLinks({ links }) {
  return <div className="project-links">{links.map(({ label, href, primary }) => (
    <a className={primary ? 'button button-primary' : 'text-link'} href={href} key={href} target="_blank" rel="noopener noreferrer">{label}<Arrow diagonal /></a>
  ))}</div>
}

function ProjectVisual({ project }) {
  const { image, visual, title } = project
  return (
    <figure className={`project-visual ${visual}-visual`}>
      <div className="visual-topline"><span>{title}</span><span>{image.kind}</span></div>
      <a className={`project-image-link ${image.fit || ''}`} href={image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image for ${title}`}>
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" />
        <span className="image-open-label">View full image<Arrow diagonal /></span>
      </a>
      <figcaption className="project-image-caption"><span>{image.caption}</span><Arrow diagonal /></figcaption>
    </figure>
  )
}

function FeaturedProject({ project, index }) {
  return (
    <article className="featured-project" id={project.id} aria-labelledby={`${project.id}-title`}>
      <div className="project-copy">
        <div className="project-eyebrow"><span>0{index + 1} / {project.category}</span><span className="status">{project.status}</span></div>
        <h3 id={`${project.id}-title`}>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <ul className="project-highlights">{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
        <ul className="tech-list" aria-label={`${project.title} technologies`}>{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul>
        <ProjectLinks links={project.links} /><p className="project-note">{project.note}</p>
        <details className="engineering-details"><summary>Inside the build<span aria-hidden="true">+</span></summary><div>{project.engineering.map(({ title, text }) => <p key={title}><strong>{title}</strong> {text}</p>)}</div></details>
      </div>
      <ProjectVisual project={project} />
    </article>
  )
}

export default function App() {
  const [foundationFilter, setFoundationFilter] = useState('All')
  const visibleFoundations = foundationProjects.filter(project => foundationFilter === 'All' || project.category === foundationFilter)
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header"><div className="shell header-inner">
        <a className="brand" href="#home" aria-label="Conway M. Benson, home"><span className="brand-mark" aria-hidden="true">CB<span>.</span></span><span>Conway M. Benson<small>SOFTWARE DEVELOPER</small></span></a>
        <nav className="site-nav" aria-label="Main navigation"><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#about">About</a><a href="#contact">Contact</a><a className="nav-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume<Arrow diagonal /></a></nav>
      </div></header>
      <main id="main">
        <section className="hero shell" id="home" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="availability-dot" aria-hidden="true" />PYTHON · DJANGO · REACT · AI</p>
            <h1 id="hero-title">Practical software.<br /><span>Built from real life.</span></h1>
            <p className="hero-description">I’m Conway, a software developer building tools for the way people actually work, study, and plan their day.</p>
            <p className="hero-detail">From student scheduling to hospitality operations and AI-assisted planning, I turn everyday problems into working applications.</p>
            <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work<Arrow /></a><a className="text-link" href="https://github.com/waycon86" target="_blank" rel="noopener noreferrer">GitHub<Arrow diagonal /></a></div>
            <p className="hero-location">Washington, DC area<span aria-hidden="true">/</span>Open to software engineering opportunities</p>
          </div>
          <aside className="build-index" aria-label="Featured project index"><div className="index-header"><span>CURRENT PROJECTS</span><span className="index-rule" /></div>{featuredProjects.map((project, index) => (
            <a href={`#${project.id}`} key={project.id} className="index-project"><span className="index-number">0{index + 1}</span><span><strong>{project.title}</strong><small>{project.shortDescription}</small></span><Arrow diagonal /></a>
          ))}<div className="index-footer"><span>Built, deployed, and still improving.</span><span aria-hidden="true">↙</span></div></aside>
        </section>
        <section className="shell projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2 id="projects-title">From the problem<br />to the product.</h2></div><p>Personal projects shaped by my experience in school, hospitality, and everyday planning. Here’s what I built and how it works.</p></div>
          <div className="featured-projects">{featuredProjects.map((project, index) => <FeaturedProject key={project.id} project={project} index={index} />)}</div>
          <div className="foundations-header"><div><p className="eyebrow">MORE OF THE WORK</p><h3>Earlier builds & foundations</h3></div><div className="project-filters" role="group" aria-label="Filter earlier projects">{['All', 'Coursework', 'Portfolio'].map(filter => <button key={filter} type="button" aria-pressed={foundationFilter === filter} onClick={() => setFoundationFilter(filter)}>{filter}</button>)}</div></div>
          <p className="visually-hidden" role="status">{visibleFoundations.length} earlier {visibleFoundations.length === 1 ? 'project' : 'projects'} shown</p>
          <div className="foundation-grid">{visibleFoundations.map(project => (
            <article className="foundation-project" key={project.title}>
              <a className="foundation-image-link" href={project.image.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full image for ${project.title}`}>
                <img src={project.image.src} alt={project.image.alt} width={project.image.width} height={project.image.height} loading="lazy" decoding="async" />
                <span className="image-open-label">View full image<Arrow diagonal /></span>
              </a>
              <p className="foundation-category">{project.category}<span aria-hidden="true">↗</span></p><h4>{project.title}</h4><p>{project.description}</p><ul className="tech-list" aria-label={`${project.title} technologies`}>{project.stack.map(tech => <li key={tech}>{tech}</li>)}</ul><ProjectLinks links={project.links} /></article>
          ))}</div>
          <a className="github-more text-link" href="https://github.com/waycon86?tab=repositories" target="_blank" rel="noopener noreferrer">More experiments and learning on GitHub<Arrow diagonal /></a>
        </section>
        <section className="skills-section" id="skills" aria-labelledby="skills-title"><div className="shell">
          <div className="section-heading"><div><p className="eyebrow">THE TOOLKIT</p><h2 id="skills-title">Skills put to work.</h2></div><p>Python and Django are my foundation. My recent projects extend into React, TypeScript, structured AI workflows, and production deployment.</p></div>
          <div className="skill-grid">{skillGroups.map(({ title, number, skills, context }) => <div className="skill-group" key={title}><span className="skill-number">{number}</span><h3>{title}</h3><p>{context}</p><ul className="skill-list">{skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div>
          <div className="additional-skills"><span>ALSO IN MY TOOLKIT</span><p>Tableau · R · Data exploration · Technical troubleshooting · Salesforce · ServiceBench</p></div>
        </div></section>
        <section className="shell about-section" id="about" aria-labelledby="about-title">
          <div className="about-heading"><p className="eyebrow">THE PERSON BEHIND THE CODE</p><h2 id="about-title">A different path.<br /><span>The same drive<br />to solve problems.</span></h2><p className="about-signature">Conway M. Benson<span>Developer · Student · Builder</span></p></div>
          <div className="about-copy"><p className="about-lead">I started learning to code in the back of an ambulance between EMT calls.</p><p>I grew up on a small farm in Michigan, worked in emergency medicine, ran a moving business, and built experience in technical service and hospitality. Those environments taught me to stay calm, figure out what’s broken, and take responsibility for fixing it.</p><p>That’s how I approach software, too. Training Hub grew out of hospitality workflows. Student on the Go tackles the challenge of fitting school around work. Waycon Daily brings tasks, goals, and planning into one place.</p><p>I’m continuing my education at Southern New Hampshire University and building with Python, Django, React, and AI tools. I use AI to ask better questions, work through unfamiliar problems, and keep learning as I build.</p><a className="text-link" href="/resume.pdf" download>Download my resume<Arrow diagonal /></a></div>
        </section>
        <section className="shell contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-panel"><div><p className="eyebrow">LET’S CONNECT</p><h2 id="contact-title">Have something<br />worth building?</h2><p>I’m looking for backend and full-stack software engineering opportunities where I can contribute to real products and keep growing.</p><a className="button button-primary" href="mailto:ConwayMBenson@gmail.com">Get in touch<Arrow diagonal /></a></div><div className="contact-links"><a href="mailto:ConwayMBenson@gmail.com"><span>Email</span><strong>ConwayMBenson@gmail.com</strong><Arrow diagonal /></a><a href="https://github.com/waycon86" target="_blank" rel="noopener noreferrer"><span>GitHub</span><strong>waycon86</strong><Arrow diagonal /></a><a href="https://www.linkedin.com/in/conwaymbenson/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>Conway M. Benson</strong><Arrow diagonal /></a><a href="/resume.pdf" download><span>Resume</span><strong>Download PDF</strong><Arrow diagonal /></a></div></div></section>
      </main>
      <footer className="site-footer shell"><a className="footer-brand" href="#home">ConwayMBenson.dev<span>© {new Date().getFullYear()} Conway M. Benson</span></a><p>Built with React & Vite.<span>Always learning. Always building.</span></p><a className="text-link" href="#home">Back to top<span aria-hidden="true">↑</span></a></footer>
    </>
  )
}
