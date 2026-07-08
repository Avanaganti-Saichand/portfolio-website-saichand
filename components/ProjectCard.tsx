"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Project, Mode } from "@/data/resume";

function Field({ label, children, accent }: { label: string; children: React.ReactNode; accent: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-wider" style={{ color: accent }}>
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-slate-300">{children}</p>
    </div>
  );
}

export default function ProjectCard({
  project: p,
  mode,
  featured = false,
}: {
  project: Project;
  mode: Mode;
  featured?: boolean;
}) {
  return (
    <article
      className={`${featured ? "gradient-border" : "glass"} lift flex h-full flex-col rounded-2xl p-6 md:p-7`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {featured && (
            <p className="mb-2 inline-block rounded-full bg-cyan/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-cyan">
              Featured case study
            </p>
          )}
          <h3 className="text-xl font-semibold text-white md:text-2xl">{p.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{p.tagline}</p>
        </div>
      </div>

      {/* mockup placeholder */}
      <div
        className={`mt-5 flex items-center justify-center rounded-xl border border-line bg-gradient-to-br from-white/[0.04] to-transparent ${featured ? "h-36" : "h-20"}`}
        aria-hidden
      >
        <span
          className="text-4xl font-bold opacity-25"
          style={{ color: p.accent }}
        >
          {p.name.charAt(0)}
        </span>
      </div>

      {/* mode-dependent body */}
      <div className="mt-5 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="space-y-3.5"
          >
            {mode === "recruiter" && (
              <>
                <Field label="My role" accent={p.accent}>{p.role}</Field>
                <Field label="Impact" accent={p.accent}>{p.impact}</Field>
              </>
            )}
            {mode === "engineer" && (
              <>
                <Field label="Architecture" accent={p.accent}>{p.architecture}</Field>
                <Field label="Impact" accent={p.accent}>{p.impact}</Field>
              </>
            )}
            {mode === "product" && (
              <>
                <Field label="Problem" accent={p.accent}>{p.problem}</Field>
                <Field label="User impact" accent={p.accent}>{p.impact}</Field>
                <Field label="Business value" accent={p.accent}>{p.business}</Field>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
        {p.tech.map((t) => (
          <span key={t} className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-slate-400">
            {t}
          </span>
        ))}
      </div>

      {(p.github || p.live) && (
        <div className="mt-5 flex gap-3">
          {p.github && (
            <a
              href={p.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-4 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              GitHub ↗
            </a>
          )}
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-4 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              Live ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
