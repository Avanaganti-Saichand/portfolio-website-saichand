"use client";
import { motion } from "framer-motion";
import { personal, Mode } from "@/data/resume";
import ModeSwitch from "./ModeSwitch";
import DashboardMock from "./DashboardMock";

export default function Hero({
  mode,
  onModeChange,
}: {
  mode: Mode;
  onModeChange: (m: Mode) => void;
}) {
  return (
    <header id="top" className="relative overflow-hidden">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_30%,black,transparent)]" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-28 md:pt-32 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-slate-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {personal.name} · {personal.role}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-[3.3rem]"
          >
            Building <span className="text-gradient">mobile products</span>, AI
            workflows, and scalable full-stack systems.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-5 max-w-xl leading-relaxed text-slate-400"
          >
            {personal.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-blue to-cyan px-6 py-3 text-sm font-semibold text-[#06121f] shadow-lg shadow-blue/25 transition-transform hover:scale-[1.03]"
            >
              View Projects
            </a>
            <a
              href={personal.resume}
              download
              className="rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm text-slate-200 transition-colors hover:border-white/25 hover:text-white"
            >
              Download Resume
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full border border-line bg-white/[0.03] px-6 py-3 text-sm text-slate-200 transition-colors hover:border-white/25 hover:text-white"
            >
              Contact Me
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-12"
          >
            <ModeSwitch mode={mode} onChange={onModeChange} />
          </motion.div>
        </div>
        <div className="hidden lg:block">
          <DashboardMock />
        </div>
      </div>
    </header>
  );
}
