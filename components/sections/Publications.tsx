"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { publications } from "@/data/resume";
import { FaFileAlt, FaExternalLinkAlt } from "react-icons/fa";

export default function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <SectionHeading
        kicker="research"
        title="Published research"
        subtitle="Peer-reviewed work in deep learning and NLP, published in the International Journal of All Research Education and Scientific Methods."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Reveal key={pub.title} delay={i * 0.08}>
            <a href={pub.link} target="_blank" rel="noreferrer" className="block h-full">
              <SpotlightCard className="group h-full p-7">
                <div className="flex items-start justify-between">
                  <FaFileAlt className="text-2xl text-accent-violet" />
                  <FaExternalLinkAlt className="text-sm text-gray-600 transition-colors group-hover:text-accent" />
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-accent">
                  {pub.title}
                </h3>
                <p className="mt-1.5 font-mono text-xs text-gray-500">{pub.venue}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{pub.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pub.tags.map((t) => (
                    <span key={t} className="rounded-full border border-accent-violet/25 bg-accent-violet/10 px-2.5 py-1 font-mono text-[11px] text-violet-300">
                      {t}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
