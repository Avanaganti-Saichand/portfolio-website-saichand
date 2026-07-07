"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { education } from "@/data/resume";
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <SectionHeading kicker="education" title="Academic background" />
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <Reveal key={e.school} delay={i * 0.08}>
            <SpotlightCard className="flex h-full items-start gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-xl text-accent">
                <FaGraduationCap />
              </span>
              <div>
                <h3 className="font-semibold text-white">{e.degree}</h3>
                <p className="mt-0.5 text-sm text-gray-400">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-gray-500">
                  {e.period} · {e.location}{e.detail && ` · ${e.detail}`}
                </p>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
