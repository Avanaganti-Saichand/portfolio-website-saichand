"use client";
import Reveal from "@/components/ui/Reveal";
import { personal, socials } from "@/data/resume";
import { FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 scroll-mt-24">
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-accent-violet/10 to-transparent" />
      <Reveal className="relative text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-accent">
          <span className="mr-2 text-gray-600">{"//"}</span>contact
        </p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-5xl">
          Let&apos;s build something that <span className="text-gradient">ships</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-gray-400">
          Whether it&apos;s a mobile app that needs native muscle, a web platform,
          or AI wired into production — I&apos;m one message away.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03]"
          >
            <FaEnvelope /> {personal.email}
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5 text-2xl text-gray-500">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name} className="transition-all hover:-translate-y-1 hover:text-white">
              <s.icon />
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
