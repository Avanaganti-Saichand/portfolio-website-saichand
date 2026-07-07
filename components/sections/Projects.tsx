"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { projects } from "@/data/resume";
import { FaGithub, FaExternalLinkAlt, FaCheck } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <SectionHeading
        kicker="work"
        title="Selected builds"
        subtitle="Production apps, enterprise platforms, and shipped case studies — each one carried from design to deployment."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
            <SpotlightCard className="group flex h-full flex-col p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider" style={{ color: p.accent }}>
                    {p.type}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-semibold text-white">{p.title}</h3>
                </div>
                <div className="flex shrink-0 gap-3 text-lg text-gray-500">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} on GitHub`} className="transition-colors hover:text-white">
                      <FaGithub />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" aria-label={`${p.title} live site`} className="text-base transition-colors hover:text-white">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-gray-400">{p.description}</p>
              <ul className="mt-5 space-y-2">
                {p.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2.5 text-sm text-gray-300">
                    <FaCheck className="shrink-0 text-[10px]" style={{ color: p.accent }} />
                    {o}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[11px] text-gray-400">
                    {t}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
