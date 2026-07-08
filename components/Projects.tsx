"use client";
import { projects, Mode } from "@/data/resume";
import Section, { Reveal } from "./Section";
import ProjectCard from "./ProjectCard";

export default function Projects({ mode }: { mode: Mode }) {
  const [featured, ...rest] = projects;
  return (
    <Section
      id="projects"
      index="02"
      title="Featured Case Studies"
      subtitle="Shipped products across mobile, AI, and full-stack — shown through the lens of your selected profile mode."
    >
      <div className="grid gap-5 lg:grid-cols-6">
        <Reveal className="lg:col-span-4">
          <ProjectCard project={featured} mode={mode} featured />
        </Reveal>
        <Reveal delay={0.08} className="lg:col-span-2">
          <ProjectCard project={rest[0]} mode={mode} />
        </Reveal>
        {rest.slice(1).map((p, i) => (
          <Reveal key={p.id} delay={i * 0.07} className="lg:col-span-2">
            <ProjectCard project={p} mode={mode} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
