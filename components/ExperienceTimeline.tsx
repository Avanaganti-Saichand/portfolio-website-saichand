"use client";
import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import Section, { Reveal } from "./Section";

export default function ExperienceTimeline() {
  return (
    <Section
      id="experience"
      index="03"
      title="Experience"
      subtitle="Five years across enterprise mobile, full-stack web, and applied ML."
    >
      <div className="relative ml-2 border-l border-line pl-8 md:ml-4 md:pl-10">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.04} className="relative pb-12 last:pb-0">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 320, delay: 0.15 }}
              className="absolute -left-[41px] top-7 h-3 w-3 rounded-full border-2 border-base bg-gradient-to-r from-blue to-cyan md:-left-[49px]"
              aria-hidden
            />
            <div className="glass lift rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">
                  {job.role} <span className="font-normal text-slate-500">·</span> {job.company}
                </h3>
                <p className="font-mono text-xs text-cyan">{job.period}</p>
              </div>
              <p className="mt-0.5 text-xs text-slate-500">{job.location}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{job.summary}</p>
              <ul className="mt-4 space-y-2">
                {job.achievements.map((a, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-slate-300">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-cyan" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
                {job.tech.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
