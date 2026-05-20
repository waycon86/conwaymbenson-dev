export default function App() {
  const skills = [
    "Python",
    "Django",
    "REST APIs",
    "PostgreSQL",
    "JavaScript",
    "HTML / CSS",
    "Git & GitHub",
    "Linux (Ubuntu)",
    "Render",
    "Capacitor",
    "Progressive Web Apps (PWA)",
    "Responsive Design",
    "Tableau",
    "R Data Science",
    "Salesforce",
    "ServiceBench",
    "System Troubleshooting",
  ];

  const projects = [
    {
      title: "Training Hub / AppBar",
      subtitle: "Full-stack operations and employee training platform",
      stack: "Python • Django • PostgreSQL • Render • JavaScript • Capacitor",
      description:
        "Built a Django-based hospitality operations platform designed to support employee training, scheduling visibility, quizzes, manuals, messaging, and manager workflows. The project focuses on real operational needs, production deployment, persistent database setup, and mobile-friendly use.",
      highlights: [
        "Employee authentication and profile systems",
        "Training modules and knowledge tracking",
        "Quiz platform supporting cocktail, wine, beer, food, dessert, and service education",
        "PDF ingestion workflows for training content and quizzes",
        "PostgreSQL database persistence and admin workflows",
        "Operational dashboards and scheduling visibility",
        "Progressive Web Apps (PWA) support",
        "Android and iOS packaging using Capacitor",
        "Production deployment using Render",
      ],
      liveUrl: "https://properbar.onrender.com",
      demoUsername: "demo",
      demoPassword: "Demo123!",
    },
    {
      title: "ConwayMBenson.dev",
      subtitle: "Personal developer portfolio",
      stack: "React • Vite • JavaScript",
      description:
        "Built a personal portfolio website to present software projects, technical skills, resume materials, and career background in one professional place.",
      highlights: [
        "React and Vite frontend",
        "Project showcase",
        "Resume integration",
        "Responsive layout",
        "Professional contact section",
      ],
      liveUrl: "https://conwaymbenson.dev",
    },
    {
      title: "Mobile App Packaging",
      subtitle: "PWA to iOS and Android workflow",
      stack: "Capacitor • PWA • iOS • Android",
      description:
        "Converted a web application into a mobile-ready experience using Progressive Web App standards and Capacitor, including manifests, icons, safe-area fixes, and app-store preparation steps.",
      highlights: [
        "PWA setup with manifest and install support",
        "Capacitor integration for iOS and Android",
        "Mobile layout debugging and device testing",
        "App icon, splash screen, and mobile metadata setup",
        "Release preparation for app stores",
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
                Software Developer | Python | Django | Backend Systems
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-300">
                I build backend systems and operational platforms using Python,
                Django, PostgreSQL, REST APIs, and cloud deployment workflows.
                My background in emergency medicine, business ownership, and
                technical operations shapes how I approach software: solve real
                problems, own outcomes, and build systems people actually use.
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
                  What I Bring
                </p>

                <div className="mt-6 space-y-5">
                  {[
                    [
                      "Backend Development",
                      "Python, Django, REST APIs, and database-backed applications",
                    ],
                    [
                      "Operational Mindset",
                      "Building tools around real business and workflow needs",
                    ],
                    [
                      "Deployment Experience",
                      "Render hosting, PostgreSQL persistence, debugging, and iteration",
                    ],
                    [
                      "Mobile Readiness",
                      "Responsive UI, Progressive Web Apps, and Capacitor packaging",
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
            Projects That Show How I Work
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-neutral-300">
            I build software that is useful, maintainable, and grounded in
            real-world needs. These projects highlight backend development,
            database work, deployment, debugging, mobile workflows, and product
            thinking.
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

                  <p className="mt-2 text-sm font-semibold text-amber-300">
                    {project.stack}
                  </p>

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
                        View Live Project
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
                Technical Skills With Real Project Experience
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                My strongest experience is in Python, Django, backend workflows,
                PostgreSQL, deployment, debugging, and building tools that
                improve operations. I’m looking for software engineering roles
                where I can contribute quickly and keep growing.
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
              How I Think About Building Software
            </h2>

            <p className="mt-5 leading-8 text-neutral-300">
              I did not come into software through the traditional path, and
              that has shaped the kind of developer I am.
            </p>

            <p className="mt-4 leading-8 text-neutral-300">
              I grew up on a farm where solving problems was part of everyday
              life. If something broke, you fixed it. There was no escalation
              path, no waiting for someone else to step in, and no room to
              ignore the problem.
            </p>

            <p className="mt-4 leading-8 text-neutral-300">
              That mindset carried into emergency medicine. As an EMT-B in
              Washington, DC, I worked in environments where decisions had real
              consequences and systems often failed. You learn to stay calm,
              think clearly, and take ownership.
            </p>

            <p className="mt-4 leading-8 text-neutral-300">
              Software gave me a way to solve operational problems at scale. I
              focus on backend systems, workflow tools, and applications that
              reduce friction instead of adding to it.
            </p>

            <p className="mt-4 leading-8 text-neutral-300">
              Today, I build applications using Python, Django, PostgreSQL,
              REST APIs, and modern web technologies with an emphasis on
              reliability, execution, and practical value.
            </p>
          </div>

          <div className="rounded-3xl border border-amber-400/20 bg-amber-400/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              What Sets Me Apart
            </p>

            <div className="mt-5 grid gap-4">
              {[
                "Builder mindset from real-world environments",
                "Experience solving problems under pressure",
                "Focus on systems that actually work in practice",
                "Strong ownership and accountability",
                "Ability to connect technical work to real operations",
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

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 md:pb-28">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-amber-400/10 p-8 md:p-10">
          <div className="grid items-start gap-10 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Contact
              </p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Let’s Talk About Opportunities
              </h2>

              <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                I’m looking for software engineering opportunities where I can
                contribute to real products, keep growing as a backend
                developer, and help build systems that solve meaningful
                problems.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:ConwayMBenson@gmail.com"
                  className="rounded-2xl bg-amber-400 px-6 py-3 font-semibold text-neutral-950 transition hover:scale-[1.02]"
                >
                  Email Me
                </a>

                <a
                  href="https://github.com/waycon86?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
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
                  className="rounded-2xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-neutral-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-400">
                What I’m Looking For
              </p>

              <h3 className="mt-3 text-lg font-semibold text-white">
                Software Engineering Opportunities
              </h3>

              <p className="mt-4 text-sm leading-6 text-neutral-300">
                I’m currently seeking a software engineering role where I can
                contribute to real systems, strengthen my backend skills, and
                continue growing as a developer.
              </p>

              <p className="mt-4 text-sm leading-6 text-neutral-300">
                I’m especially interested in backend or full-stack roles where I
                can build, ship, debug, and improve software that has practical
                impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}