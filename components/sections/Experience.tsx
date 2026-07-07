"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <SectionHeading
        kicker="experience"
        title="Where I've built"
        subtitle="Five years across enterprise mobile, full-stack web, and applied ML — from Adobe internship to senior engineering."
      />
      <div className="relative ml-3 border-l border-line pl-8 md:ml-6 md:pl-12">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05} className="relative pb-14 last:pb-0">
            <span
              className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-surface md:-left-[57px]"
            >
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                className="h-2 w-2 rounded-full"
                style={{ background: job.accent }}
              />
            </span>
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold text-white">{job.company}</h3>
              <span className="font-mono text-xs" style={{ color: job.accent }}>{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-gray-400">
              {job.role} · <span className="text-gray-500">{job.location}</span>
            </p>
            <ul className="mt-4 space-y-2.5">
              {job.highlights.map((h, j) => (
                <li key={j} className="flex gap-3 text-sm leading-relaxed text-gray-400">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: job.accent }} />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span key={t} className="rounded-full border border-line bg-card px-2.5 py-1 font-mono text-[11px] text-gray-400">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
