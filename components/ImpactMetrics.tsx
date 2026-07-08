"use client";
import { metrics } from "@/data/resume";
import Section, { Reveal } from "./Section";

export default function ImpactMetrics() {
  return (
    <Section
      id="impact"
      index="01"
      title="Engineering Impact"
      subtitle="Numbers from shipped, production software — not side projects."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 0.06}>
            <div className="glass lift h-full rounded-2xl p-5">
              <p className="text-gradient text-3xl font-bold">{m.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-200">{m.label}</p>
              <p className="mt-1 text-xs text-slate-500">{m.sub}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
