"use client";
import { useState } from "react";
import { MotionConfig } from "framer-motion";
import { Mode, personal } from "@/data/resume";
import Hero from "./Hero";
import Spotlight from "./Spotlight";
import TechMarquee from "./TechMarquee";
import ImpactMetrics from "./ImpactMetrics";
import Projects from "./Projects";
import ExperienceTimeline from "./ExperienceTimeline";
import SkillsGrid from "./SkillsGrid";
import { Publications, Education } from "./Extras";
import ContactCTA from "./ContactCTA";
import Footer from "./Footer";

const nav = [
  { label: "Impact", href: "#impact" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Site() {
  const [mode, setMode] = useState<Mode>("recruiter");

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-cyan focus:px-4 focus:py-2 focus:text-[#06121f]"
      >
        Skip to content
      </a>
      <Spotlight />
      <div className="relative z-10">
        <nav
          aria-label="Primary"
          className="fixed inset-x-0 top-0 z-50 border-b border-line bg-base/75 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
            <a href="#top" className="font-mono text-sm text-white">
              <span className="text-cyan">~/</span>saichand
            </a>
            <ul className="hidden items-center gap-6 text-sm text-slate-400 md:flex">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 text-sm text-cyan transition-colors hover:bg-cyan/20"
            >
              Hire me
            </a>
          </div>
        </nav>

        <main>
          <Hero mode={mode} onModeChange={setMode} />
          <TechMarquee />
          <ImpactMetrics />
          <Projects mode={mode} />
          <ExperienceTimeline />
          <SkillsGrid />
          <Publications />
          <Education />
          <ContactCTA />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
