import HeroVisual from "@/components/HeroVisual";
import {
  personal,
  experience,
  projects,
  publications,
  skills,
  education,
} from "@/data/resume";

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-[var(--rule)] py-14">
      <h2 className="mb-9 font-mono text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
        <span className="mr-3 text-[var(--burnt)]">{index}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-[var(--cobalt)] underline decoration-[var(--cobalt)]/35 underline-offset-4 transition-colors hover:decoration-[var(--cobalt)]"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-[680px] px-6">
      {/* header */}
      <header className="flex items-center justify-between pb-4 pt-9">
        <span className="flex h-8 w-8 items-center justify-center bg-[var(--cobalt)] font-mono text-xs font-bold text-[#eceae4]">
          SA
        </span>
        <nav className="flex gap-5 font-mono text-xs text-[var(--ink-soft)]">
          <a href="#work" className="transition-colors hover:text-[var(--cobalt)]">work</a>
          <a href="#projects" className="transition-colors hover:text-[var(--cobalt)]">projects</a>
          <a href="#research" className="transition-colors hover:text-[var(--cobalt)]">research</a>
          <a href={`mailto:${personal.email}`} className="transition-colors hover:text-[var(--cobalt)]">contact</a>
        </nav>
      </header>

      <main>
        {/* intro */}
        <section className="relative pb-16 pt-20">
          <div className="pointer-events-none absolute -right-72 top-8 hidden h-[430px] w-[360px] xl:block">
            <HeroVisual />
          </div>
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em] text-[var(--ink-faint)]">
            Senior Software Engineer
          </p>
          <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-[2.9rem]">
            Saichand
            <br />
            Avanaganti
            <span className="text-[var(--burnt)]">.</span>
          </h1>
          <p className="mt-3 font-mono text-sm text-[var(--ink-soft)]">
            mobile <span className="text-[var(--burnt)]">/</span> web{" "}
            <span className="text-[var(--burnt)]">/</span> applied AI
          </p>
          <p className="mt-7 max-w-[56ch] leading-relaxed text-[var(--ink-soft)]">
            {personal.summary}
          </p>
          <p className="mt-7 flex gap-6 font-mono text-sm">
            <ExtLink href={`mailto:${personal.email}`}>email</ExtLink>
            <ExtLink href={personal.github}>github</ExtLink>
            <ExtLink href={personal.linkedin}>linkedin</ExtLink>
          </p>
        </section>

        {/* experience */}
        <Section id="work" index="01" title="Experience">
          <div className="space-y-12">
            {experience.map((job) => (
              <article key={job.company} className="grid gap-2 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="pt-0.5 font-mono text-xs text-[var(--ink-faint)]">{job.period}</p>
                <div>
                  <h3 className="font-semibold">
                    {job.role} <span className="font-normal text-[var(--ink-faint)]">·</span>{" "}
                    {job.company}
                  </h3>
                  <p className="mt-2 leading-relaxed text-[var(--ink-soft)]">{job.summary}</p>
                  {job.highlights.length > 0 && (
                    <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">
                      {job.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="select-none text-[var(--burnt)]">—</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                  <p className="mt-3 font-mono text-xs text-[var(--ink-faint)]">{job.tech}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* projects */}
        <Section id="projects" index="02" title="Projects">
          <div className="space-y-10">
            {projects.map((p) => (
              <article key={p.title}>
                <h3 className="font-semibold">
                  {p.title}
                  {p.link && (
                    <span className="ml-3 font-mono text-xs font-normal">
                      <ExtLink href={p.link}>{p.linkLabel} ↗</ExtLink>
                    </span>
                  )}
                </h3>
                <p className="mt-2 max-w-[58ch] leading-relaxed text-[var(--ink-soft)]">
                  {p.description}
                </p>
                <p className="mt-2 font-mono text-xs text-[var(--ink-faint)]">{p.tech}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* publications */}
        <Section id="research" index="03" title="Publications">
          <div className="space-y-6">
            {publications.map((pub) => (
              <article key={pub.title}>
                <h3 className="font-medium">
                  <ExtLink href={pub.link}>{pub.title}</ExtLink>
                </h3>
                <p className="mt-1 font-mono text-xs text-[var(--ink-faint)]">{pub.venue}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* skills */}
        <Section id="skills" index="04" title="Skills">
          <dl className="space-y-4">
            {skills.map((s) => (
              <div key={s.title} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6">
                <dt className="pt-0.5 font-mono text-xs uppercase tracking-wide text-[var(--ink-faint)]">
                  {s.title}
                </dt>
                <dd className="text-[0.95rem] leading-relaxed text-[var(--ink-soft)]">{s.items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        {/* education */}
        <Section id="education" index="05" title="Education">
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.school} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6">
                <p className="pt-0.5 font-mono text-xs text-[var(--ink-faint)]">{e.period}</p>
                <p className="text-[var(--ink-soft)]">
                  <span className="font-medium text-[var(--ink)]">{e.degree}</span> · {e.school}
                  {e.detail && <span className="text-[var(--ink-faint)]"> · {e.detail}</span>}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* contact — one bold concrete slab */}
        <section id="contact" className="border-t border-[var(--rule)] py-16">
          <h2 className="mb-9 font-mono text-xs uppercase tracking-[0.22em] text-[var(--ink-soft)]">
            <span className="mr-3 text-[var(--burnt)]">06</span>Contact
          </h2>
          <a
            href={`mailto:${personal.email}`}
            className="group block bg-[var(--ink)] p-8 transition-colors hover:bg-[var(--cobalt)] sm:p-10"
          >
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[#a8a49b] transition-colors group-hover:text-[#c7d2f5]">
              Open to senior mobile & full-stack roles
            </p>
            <p className="mt-3 text-2xl font-bold text-[#eceae4] sm:text-3xl">
              {personal.email} <span className="text-[var(--burnt)] transition-colors group-hover:text-[#ffb27a]">→</span>
            </p>
          </a>
        </section>
      </main>

      <footer className="flex items-baseline justify-between border-t border-[var(--rule)] py-10 font-mono text-xs text-[var(--ink-faint)]">
        <span>© {new Date().getFullYear()} {personal.name}</span>
        <span>{personal.location}</span>
      </footer>
    </div>
  );
}
