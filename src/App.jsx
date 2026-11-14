import { useEffect, useState } from "react";
import { profile, experience, projects, skills } from "./data.js";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ---------- Icons ---------- */
const filled = { viewBox: "0 0 24 24", "aria-hidden": "true", focusable: "false", fill: "currentColor" };
const outlined = {
  viewBox: "0 0 24 24",
  "aria-hidden": "true",
  focusable: "false",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  linkedin: (
    <svg {...filled}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  github: (
    <svg {...filled}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  devpost: (
    <svg {...filled}>
      <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" fillRule="evenodd" />
    </svg>
  ),
  resume: (
    <svg {...outlined}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </svg>
  ),
  pin: (
    <svg {...outlined}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
};

/* Highlights the nav link of the section currently on screen. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function Header({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          {profile.name}
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={`site-nav ${open ? "open" : ""}`} aria-label="Primary">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? "active" : ""}
              aria-current={active === s.id ? "true" : undefined}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Avatar() {
  if (profile.photo) {
    return <img className="avatar" src={profile.photo} alt={profile.name} width="176" height="176" />;
  }
  return (
    <div className="avatar avatar-initials" role="img" aria-label={profile.name}>
      {profile.initials}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <Avatar />
      <h1 id="hero-title">{profile.name}</h1>
      <p className="headline">{profile.headline}</p>
      <p className="status">
        <span className="dot" aria-hidden="true" />
        {profile.status}
      </p>
      <div className="bio">
        {profile.bio.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

function SectionHead({ id, title, blurb }) {
  return (
    <div className="section-head">
      <h2 id={id}>{title}</h2>
      {blurb && <p>{blurb}</p>}
    </div>
  );
}

function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <SectionHead
        id="experience-title"
        title="Experience"
        blurb="Research, software development, machine learning, and leadership."
      />
      <ol className="timeline">
        {experience.map((job) => (
          <li
            className={`timeline-item ${job.period.includes("Present") ? "current" : ""}`}
            key={job.role + job.org}
          >
            <article className="card">
              <div className="card-top">
                <h3>{job.role}</h3>
                <span className="period">{job.period}</span>
              </div>
              <p className="org">{job.org}</p>
              <p className="location">
                {ICONS.pin}
                <span>{job.location}</span>
              </p>
              <p>{job.summary}</p>
              <ul className="bullets">
                {job.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <Tags items={job.tags} />
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <SectionHead id="work-title" title="Work" blurb="Hackathons/team projects, research" />
      <div className="grid two">
        {projects.map((p) => (
          <article className="card work-card" key={p.title}>
            <p className="eyebrow">{p.label}</p>
            <div className="card-top">
              <h3>{p.title}</h3>
              <span className="period">{p.year}</span>
            </div>
            <p>{p.description}</p>
            <Tags items={p.tags} />
            <div className="card-links">
              {p.links.live && (
                <a href={p.links.live} target="_blank" rel="noopener noreferrer">
                  Live demo <span aria-hidden="true">↗</span>
                </a>
              )}
              {p.links.devpost && (
                <a href={p.links.devpost} target="_blank" rel="noopener noreferrer">
                  Devpost <span aria-hidden="true">↗</span>
                </a>
              )}
              {p.links.github && (
                <a href={p.links.github} target="_blank" rel="noopener noreferrer">
                  Code <span aria-hidden="true">↗</span>
                </a>
              )}
              {p.links.paper && (
                <a href={p.links.paper} target="_blank" rel="noopener noreferrer">
                  Read paper <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <SectionHead id="skills-title" title="Skills" />
      <div className="grid">
        {skills.map((g) => (
          <div className="card" key={g.group}>
            <h3>{g.group}</h3>
            <Tags items={g.items} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the mailto link still works */
    }
  };

  const socials = [
    { label: "LinkedIn", href: profile.links.linkedin, icon: ICONS.linkedin },
    { label: "Résumé (PDF)", href: profile.resume, icon: ICONS.resume },
    { label: "Devpost", href: profile.links.devpost, icon: ICONS.devpost },
    { label: "GitHub", href: profile.links.github, icon: ICONS.github },
  ];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <SectionHead
        id="contact-title"
        title="Contact"
        blurb="I'm looking for teams working on applied AI, machine learning, and meaningful products. Reach out and let's connect."
      />
      <div className="actions center">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
        <button className="btn" type="button" onClick={copy}>
          {copied ? "Copied" : "Copy email"}
        </button>
        <span className="sr-only" role="status">
          {copied ? "Email copied to clipboard" : ""}
        </span>
      </div>
      <ul className="social" aria-label="Profiles and résumé">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              className="icon-link"
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function App() {
  const active = useActiveSection(SECTIONS.map((s) => s.id));
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header active={active} />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
