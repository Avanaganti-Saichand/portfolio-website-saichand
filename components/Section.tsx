"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

export default function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string;
  index: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} aria-label={title} className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      <Reveal>
        <div className="mb-10 flex items-baseline gap-4">
          <motion.span
            initial={{ opacity: 0, x: -14 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-mono text-sm text-cyan"
            aria-hidden
          >
            {index}
          </motion.span>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
            {subtitle && <p className="mt-2 max-w-2xl text-sm text-slate-400 md:text-base">{subtitle}</p>}
          </div>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
