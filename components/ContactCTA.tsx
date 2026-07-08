"use client";
import { personal } from "@/data/resume";
import { Reveal } from "./Section";

const buttons = [
  { label: "Email", href: `mailto:${personal.email}`, primary: true },
  { label: "GitHub", href: personal.github },
  { label: "LinkedIn", href: personal.linkedin },
  { label: "Download Resume", href: personal.resume, download: true },
];

export default function ContactCTA() {
  return (
    <section id="contact" aria-label="Contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <div className="gradient-border relative overflow-hidden rounded-3xl p-10 text-center md:p-16">
          <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" aria-hidden />
          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">
              <span aria-hidden>07 · </span>Let&apos;s talk
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Have a mobile, AI, or full-stack product idea?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-400">
              Let&apos;s build something reliable and production-ready.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {buttons.map((b) => (
                <a
                  key={b.label}
                  href={b.href}
                  {...(b.download ? { download: true } : b.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                  className={
                    b.primary
                      ? "rounded-full bg-gradient-to-r from-blue to-cyan px-6 py-3 text-sm font-semibold text-[#06121f] shadow-lg shadow-blue/25 transition-transform hover:scale-[1.03]"
                      : "rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm text-slate-200 transition-colors hover:border-white/25 hover:text-white"
                  }
                >
                  {b.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
