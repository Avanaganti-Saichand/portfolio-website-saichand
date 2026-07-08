"use client";
import { publications, education } from "@/data/resume";
import Section, { Reveal } from "./Section";

export function Publications() {
  return (
    <Section
      id="research"
      index="05"
      title="Published Research"
      subtitle="Peer-reviewed work in deep learning and NLP."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.07}>
            <a href={pub.link} target="_blank" rel="noreferrer" className="block h-full">
              <article className="glass lift h-full rounded-2xl p-6">
                <h3 className="font-semibold leading-snug text-white">{pub.title} ↗</h3>
                <p className="mt-1 font-mono text-xs text-slate-500">{pub.venue}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{pub.summary}</p>
              </article>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" index="06" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.07}>
            <div className="glass lift h-full rounded-2xl p-6">
              <h3 className="font-semibold text-white">{e.degree}</h3>
              <p className="mt-1 text-sm text-slate-400">{e.school}</p>
              <p className="mt-1 font-mono text-xs text-slate-500">{e.period} · {e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
