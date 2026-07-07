"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { FaGithub, FaLinkedin, FaAngleDoubleDown } from "react-icons/fa";
import { chapters } from "./chapters";
import { personal, stats } from "@/data/resume";
import type { Pointer } from "./DeviceScene";
import Hero from "@/components/sections/Hero";

const DeviceScene = dynamic(() => import("./DeviceScene"), { ssr: false });

function ChapterCard({
  progress,
  center,
  children,
}: {
  progress: MotionValue<number>;
  center: number;
  children: React.ReactNode;
}) {
  const opacity = useTransform(
    progress,
    [center - 0.09, center - 0.045, center + 0.045, center + 0.09],
    [0, 1, 1, 0]
  );
  const y = useTransform(
    progress,
    [center - 0.09, center - 0.045, center + 0.045, center + 0.09],
    [48, 0, 0, -48]
  );
  return (
    <motion.div
      style={{ opacity, y }}
      className="pointer-events-none absolute left-6 top-1/2 w-full max-w-lg -translate-y-1/2 md:left-16 lg:left-24"
    >
      {children}
    </motion.div>
  );
}

export default function ScrollyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<Pointer>({ x: 0, y: 0 });
  const [mode, setMode] = useState<"pending" | "3d" | "fallback">("pending");
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { rootMargin: "200px" });
    io.observe(el);
    return () => io.disconnect();
  }, [mode]);

  useEffect(() => {
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let webgl = false;
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webgl = false;
    }
    setMode(wide && motionOk && webgl ? "3d" : "fallback");
  }, []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.07], [0, -60]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0]);
  const finaleOpacity = useTransform(scrollYProgress, [0.9, 0.97], [0, 1]);
  const finaleY = useTransform(scrollYProgress, [0.9, 0.97], [40, 0]);
  const railOpacity = useTransform(scrollYProgress, [0.07, 0.12, 0.82, 0.88], [0, 1, 1, 0]);
  const useTransformScrim = useTransform(scrollYProgress, [0.88, 0.96], [0, 0.75]);

  if (mode === "fallback")
    return (
      <div ref={containerRef}>
        <Hero />
        <section className="mx-auto max-w-3xl space-y-6 px-6 pb-20">
          {chapters.map((c) => (
            <div key={c.id} className="rounded-2xl border border-line bg-card p-6">
              <p className="font-mono text-xs tracking-[0.25em]" style={{ color: c.accent }}>
                {c.kicker}
              </p>
              <h2 className="mt-2 text-xl font-bold text-white">{c.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {c.lines.map((l, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                    <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full" style={{ background: c.accent }} />
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    );

  return (
    <div
      ref={containerRef}
      className="relative h-[640vh]"
      onMouseMove={(e) => {
        pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
        pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {mode === "3d" && (
          <div className="absolute inset-0">
            <DeviceScene progress={scrollYProgress} pointer={pointer} active={inView} />
          </div>
        )}

        {/* vignette */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#050508_100%)]" />

        {/* HERO overlay */}
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="pointer-events-none absolute inset-x-0 top-[13vh] z-10 text-center"
        >
          <p className="font-mono text-sm tracking-[0.3em] text-accent">
            SENIOR SOFTWARE ENGINEER
          </p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Saichand <span className="text-gradient">Avanaganti</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl px-6 text-gray-400 md:text-lg">
            Most engineers stop at the framework.
            <span className="text-gray-200"> Scroll to see how deep I go.</span>
          </p>
          <div className="pointer-events-auto mt-7 flex items-center justify-center gap-4">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-xl text-gray-500 transition-colors hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-xl text-gray-500 transition-colors hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full border border-line px-5 py-2 text-sm text-gray-300 transition-colors hover:border-white/30 hover:text-white"
            >
              Contact
            </a>
          </div>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="text-xl text-accent"
          >
            <FaAngleDoubleDown className="mx-auto" />
          </motion.div>
          <p className="mt-1 font-mono text-[11px] tracking-widest text-gray-500">
            SCROLL TO DECONSTRUCT
          </p>
        </motion.div>

        {/* chapter progress rail */}
        <motion.div
          style={{ opacity: railOpacity }}
          className="pointer-events-none absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-3 md:flex"
        >
          {chapters.map((c, i) => (
            <ChapterDot key={c.id} progress={scrollYProgress} center={0.2 + i * 0.18} accent={c.accent} index={c.index} />
          ))}
        </motion.div>

        {/* chapters */}
        {chapters.map((c, i) => (
          <ChapterCard key={c.id} progress={scrollYProgress} center={0.2 + i * 0.18}>
            <div
              className="relative overflow-hidden rounded-r-2xl p-7 md:p-8"
              style={{
                borderLeft: `2px solid ${c.accent}`,
                background: "linear-gradient(95deg, rgba(7,7,13,0.96) 0%, rgba(7,7,13,0.9) 72%, rgba(7,7,13,0.55) 100%)",
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-7 select-none text-[9rem] font-bold leading-none text-white/[0.045]"
              >
                {c.index}
              </span>
              <p className="font-mono text-xs tracking-[0.25em]" style={{ color: c.accent }}>
                {c.kicker}
              </p>
              <h2 className="mt-3 text-2xl font-bold leading-snug text-white md:text-[2rem] md:leading-tight">
                {c.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {c.lines.map((l, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-gray-300">
                    <span
                      className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                      style={{ background: c.accent }}
                    />
                    {l}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border px-2.5 py-1 font-mono text-[10px]"
                    style={{ borderColor: `${c.accent}44`, color: c.accent, background: `${c.accent}11` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </ChapterCard>
        ))}

        {/* finale scrim */}
        <motion.div
          style={{ opacity: useTransformScrim }}
          className="pointer-events-none absolute inset-0 bg-base/60"
        />

        {/* FINALE */}
        <motion.div
          style={{ opacity: finaleOpacity, y: finaleY }}
          className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2 text-center"
        >
          <p className="font-mono text-sm tracking-[0.3em] text-gray-500">REASSEMBLED</p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-6xl">
            I ship the <span className="text-gradient">whole stack</span>.
          </h2>
          <div className="mx-auto mt-8 grid max-w-xl grid-cols-2 gap-3 px-6">
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl border border-line bg-[#0a0a12]/90 px-4 py-3 text-left">
                <span className="text-gradient text-xl font-bold">{s.value}</span>
                <span className="mt-0.5 block text-[11px] leading-snug text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex items-center justify-center gap-4">
            <a
              href="#experience"
              className="rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-transform hover:scale-[1.03]"
            >
              See the full story
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="rounded-full border border-line px-7 py-3 text-sm text-gray-300 transition-colors hover:border-white/25 hover:text-white"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ChapterDot({
  progress,
  center,
  accent,
  index,
}: {
  progress: MotionValue<number>;
  center: number;
  accent: string;
  index: string;
}) {
  const active = useTransform(
    progress,
    [center - 0.09, center - 0.03, center + 0.03, center + 0.09],
    [0.25, 1, 1, 0.25]
  );
  return (
    <motion.div style={{ opacity: active }} className="flex items-center gap-2">
      <span className="font-mono text-[10px] text-gray-500">{index}</span>
      <span className="h-2 w-2 rounded-full" style={{ background: accent }} />
    </motion.div>
  );
}
