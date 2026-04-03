export default function App() {
  const skills = [
    "Python",
    "Django",
    "Django REST Framework",
    "JavaScript",
    "HTML",
    "CSS",
    "PostgreSQL",
    "Git & GitHub",
    "REST APIs",
    "Render",
    "Capacitor",
    "Responsive Design",
  ];

  const projects = [
    {
      title: "AppBar / Training Hub",
      subtitle: "Full-stack operations and training platform",
      description:
        "Built a Django-based platform for employee training, quizzes, scheduling visibility, manuals, messaging, and manager tools. Designed for real operations use with production deployment, persistent database setup, and mobile-friendly workflows.",
      highlights: [
        "Django + PostgreSQL + Render deployment",
        "Role-based workflows for staff and managers",
        "Training modules, quizzes, manuals, and messaging",
        "Responsive UI with a polished branded theme",
      ],
      liveUrl: "https://properbar.onrender.com",
      demoUsername: "demo",
      demoPassword: "Demo123!",
    },
    {
      title: "Mobile App Packaging",
      subtitle: "PWA to iOS/Android workflow",
      description:
        "Converted a web application into a mobile-ready experience using PWA standards and Capacitor, including manifests, icons, safe-area fixes, and app-store preparation steps.",
      highlights: [
        "PWA setup with manifest and install support",
        "Capacitor integration for iOS and Android",
        "Mobile layout debugging and platform testing",
        "Release preparation for app stores",
      ],
    },
    {
      title: "Cocktail PDF Import System",
      subtitle: "Content automation for hospitality training",
      description:
        "Designed a workflow to upload cocktail PDFs, parse structured recipe data, and surface it inside the site without losing the front-end layout. Focused on versioning, admin usability, and clean content presentation.",
      highlights: [
        "Admin upload workflow",
        "PDF parsing into structured objects",
        "Version-safe content updates",
        "Consistent UI across imported content",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-amber-400">
              ConwayMBenson.dev
            </p>
            <h1 className="text-lg font-semibold">Conway M. Benson</h1>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-neutral-300 md:flex">
            <a href="#projects" className="transition hover:text-amber-400">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-amber-400">
              Skills
            </a>
            <a href="#about" className="transition hover:text-amber-400">
              About
            </a>
            <a href="#contact" className="transition hover:text-amber-400">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-300">
                Software Developer
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Building practical web applications that solve real problems.
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                I’m Conway Benson, a software developer focused on backend and
                full-stack development with hands-on experience in Python,
                Django, APIs, deployment, mobile usability, and production-style
                web applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-neutral-950 shadow-lg shadow-amber-400/20 transition hover:scale-[1.02]"
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                >
                  Contact Me
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-400">
                  What I bring
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    [
                      "Backend Development",
                      "Django, Python, APIs, and database-backed applications",
                    ],
                    [
                      "Product Mindset",
                      "Build tools around real business and operational needs",
                    ],
                    [
                      "Deployment Experience",
                      "Production hosting, persistence fixes, debugging, and iteration",
                    ],
                    [
                      "Mobile Readiness",
                      "Responsive UI, PWA packaging, and app deployment workflows",
                    ],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-neutral-300">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
            Featured Work
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Projects that show how I work
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-neutral-300">
            I build software that is useful, maintainable, and grounded in
            real-world needs. These projects highlight backend development,
            deployment, debugging, UX improvements, and product thinking.
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl md:p-8"
            >
              <div className="grid gap-8 md:grid-cols-[1.3fr_0.9fr]">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                    {project.subtitle}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-8 text-neutral-300">
                    {project.description}
                  </p>

                  {project.liveUrl && (
                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-neutral-950 transition hover:scale-[1.02]"
                      >
                        View Live App
                      </a>
                    </div>
                  )}

                  {project.demoUsername && project.demoPassword && (
                    <p className="mt-3 text-sm text-neutral-400">
                      Demo Login → Username: {project.demoUsername} | Password:{" "}
                      {project.demoPassword}
                    </p>
                  )}
                </div>

                <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-5">
                  <p className="text-sm font-semibold text-white">Highlights</p>
                  <ul className="mt-4 space-y-3 text-sm text-neutral-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Skills
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Technical skills with real project experience
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                My strongest experience is in Python, Django, backend workflows,
                deployment, debugging, and building tools that improve
                operations. I’m especially interested in software engineering
                roles where I can contribute quickly and keep growing.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              About Me
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Builder mindset, real-world urgency
            </h2>
            <p className="mt-5 leading-8 text-neutral-300">
              My background includes emergency medicine, where quick thinking,
              communication, and calm problem-solving mattered every day. I
              brought that same mindset into software: understand the problem,
              build something useful, and keep improving it until it works well.
            </p>
            <p className="mt-4 leading-8 text-neutral-300">
              I’ve focused on backend development, practical product building,
              and shipping complete projects. I’m looking for software
              developer opportunities where I can contribute while continuing to
              grow as an engineer.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Why this site works
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "Clear headline recruiters can understand fast",
                "Project summaries focused on business value and technical execution",
                "Skills section for quick scanning",
                "Professional story that supports your transition into software engineering",
                "Strong starting point for adding resume, GitHub, and LinkedIn links",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-amber-300/15 bg-neutral-950/40 p-4 text-neutral-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 pb-20 md:pb-28"
      >
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-amber-400/10 p-8 md:p-10">
          <div className="grid items-center gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Let’s talk about opportunities
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                This section is ready for your real contact details, resume
                link, GitHub, and LinkedIn.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:ConwayMBenson@gmail.com"
                  className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-neutral-950"
                >
                  Email Me
                </a>

                <a
                  href="https://github.com/waycon86?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/conwaymbenson/"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                >
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-6">
              <p className="text-sm text-neutral-400">Next adds</p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-200">
                <li>Resume download button</li>
                <li>Live project links</li>
                <li>GitHub profile link</li>
                <li>LinkedIn profile link</li>
                <li>Project screenshots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}