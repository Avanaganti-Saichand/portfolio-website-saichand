"use client";
import { motion } from "framer-motion";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa";
import { personal, stats } from "@/data/resume";
import Typewriter from "@/components/ui/Typewriter";
import PhoneMock from "@/components/PhoneMock";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to senior mobile & full-stack roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
          >
            Saichand
            <br />
            <span className="text-gradient">Avanaganti</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg text-gray-400 md:text-xl"
          >
            {personal.role} · <Typewriter words={personal.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-xl leading-relaxed text-gray-400"
          >
            I ship enterprise mobile apps on React Native&apos;s New Architecture,
            write the Swift & Kotlin underneath them, and wire AI into products —
            from on-device TensorFlow Lite to RAG pipelines in production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03]"
            >
              View my work
              <FaArrowDown className="ml-2 inline text-xs transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full border border-line px-6 py-3 text-sm text-gray-300 transition-colors hover:border-white/25 hover:text-white"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-3 text-xl text-gray-500">
              <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-white"><FaGithub /></a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-cyan-400"><FaLinkedin /></a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl border border-line bg-card/60 p-3">
                <div className="text-gradient text-2xl font-bold">{s.value}</div>
                <div className="mt-1 text-[11px] leading-snug text-gray-500">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="hidden lg:block"
        >
          <PhoneMock />
        </motion.div>
      </div>
    </section>
  );
}
