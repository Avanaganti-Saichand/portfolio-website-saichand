"use client";
import { skillCategories } from "@/data/resume";
import Section, { Reveal } from "./Section";

export default function SkillsGrid() {
  return (
    <Section
      id="skills"
      index="04"
      title="Skills"
      subtitle="The stack I reach for daily — native mobile internals to AI infrastructure and cloud delivery."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.06}>
            <div className="glass lift h-full rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: cat.accent, boxShadow: `0 0 12px ${cat.accent}66` }}
                  aria-hidden
                />
                <h3 className="font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    {s}
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
