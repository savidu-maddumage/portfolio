import CursorEffects from "./components/CursorEffects";

const projects = [
  {
    number: "01",
    name: "Where Is It",
    type: "Event discovery · Web app",
    style: "project-card--violet",
    label: "Find your next event",
    mark: "01",
  },
  {
    number: "02",
    name: "Event Management",
    type: "Event planning · Management",
    style: "project-card--aqua",
    label: "Plan it all in one place",
    mark: "02",
  },
];

export default function Home() {
  return (
    <>
      <CursorEffects />
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Savidu Maddumage, home">
          S<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <div className="hero-glow hero-glow--blue" />
          <div className="hero-glow hero-glow--violet" />
          <div className="hero-grain" />
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span className="status-dot" /> Portfolio · 2026</p>
            <h1 id="hero-title"><span className="hero-intro">Hello, I’m</span><span className="hero-name">Savidu <span className="last-name">Maddumage</span><span className="name-period">.</span></span></h1>
            <div className="hero-bottom">
              <p className="hero-role">I design and build <em>thoughtful</em><br />digital experiences.</p>
              <a className="scroll-cue" href="#projects"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
            </div>
          </div>
          <div className="hero-coordinate" aria-hidden="true">CREATIVE DEVELOPER<br />AVAILABLE FOR OPPORTUNITIES</div>
        </section>

        <section className="projects" id="projects" aria-labelledby="projects-title">
          <div className="projects-inner">
            <div className="section-heading reveal">
              <div><p className="eyebrow">A few things I’ve made</p><h2 id="projects-title">Selected <em>projects</em></h2></div>
              <p className="section-index">01 — 02<br />SCROLL TO EXPLORE</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-item reveal" key={project.number}>
                  <div className={`project-card ${project.style}`}>
                    <div className="project-card-top"><span>FEATURED WORK / {project.number}</span><span className="project-arrow" aria-hidden="true">↗</span></div>
                    <div className="project-art" aria-hidden="true">
                      <div className="art-orbit art-orbit--one" />
                      <div className="art-orbit art-orbit--two" />
                      <div className="art-window"><span className="window-dots">● ● ●</span><span className="window-rule" /><span className="window-title">{project.label}</span><span className="window-number">{project.mark}</span></div>
                    </div>
                    <span className="project-card-caption">Selected work<br />{project.number}</span>
                  </div>
                  <div className="project-meta"><div><span className="project-number">{project.number} / 02</span><h3>{project.name}</h3></div><p>{project.type}</p><span className="meta-arrow" aria-hidden="true">↗</span></div>
                </article>
              ))}
            </div>
            <p className="project-note reveal">Project previews are visual placeholders for your work. Add your screenshots and details when they’re ready.</p>
          </div>
        </section>

        <section className="about section-wrap" id="about" aria-labelledby="about-title">
          <div className="about-label reveal"><p className="eyebrow">A little about me</p><span className="about-star" aria-hidden="true">✳</span></div>
          <div className="about-content reveal"><h2 id="about-title">Curious by nature.<br /><em>Creative by choice.</em></h2><p>I’m Savidu Maddumage, a creative developer who enjoys turning ideas into clear, useful and memorable digital experiences. I bring design and code together to make work that feels as good as it looks.</p><a className="text-link" href="#contact">Let’s work together <span aria-hidden="true">↗</span></a></div>
        </section>

        <footer className="contact" id="contact">
          <div className="contact-glow" />
          <div className="contact-inner reveal"><p className="eyebrow">Have a good one in mind?</p><h2>Let’s make<br /><em>something matter.</em></h2><a className="contact-link" href="mailto:Nawodyamaddumage@gmail.com">Get in touch <span aria-hidden="true">↗</span></a><p className="contact-email">Nawodyamaddumage@gmail.com</p></div>
          <div className="footer-row"><a className="wordmark" href="#home">S<span>.</span></a><span>DESIGNED WITH INTENTION · 2026</span><a href="#home">BACK TO TOP ↑</a></div>
        </footer>
      </main>
    </>
  );
}
