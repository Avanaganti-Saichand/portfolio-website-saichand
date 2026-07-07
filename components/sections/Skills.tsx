"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { skillCategories } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <SectionHeading
        kicker="skills"
        title="Tools of the trade"
        subtitle="The stack I reach for daily — from native mobile internals to AI infrastructure and cloud delivery."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.title} delay={i * 0.06}>
            <SpotlightCard className="h-full p-6">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-lg"
                  style={{ background: `${cat.accent}1a`, color: cat.accent }}
                >
                  <cat.icon />
                </span>
                <h3 className="font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-gray-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    {s.icon && <s.icon className="text-[13px]" style={{ color: cat.accent }} />}
                    {s.name}
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
