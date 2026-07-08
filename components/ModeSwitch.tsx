"use client";
import { motion } from "framer-motion";
import { modes, Mode } from "@/data/resume";

export default function ModeSwitch({
  mode,
  onChange,
}: {
  mode: Mode;
  onChange: (m: Mode) => void;
}) {
  const active = modes.find((m) => m.id === mode)!;
  return (
    <div>
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
        Choose profile mode
      </p>
      <div
        role="tablist"
        aria-label="Profile mode"
        className="glass inline-flex flex-wrap gap-1 rounded-full p-1"
      >
        {modes.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            onClick={() => onChange(m.id)}
            className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
              mode === m.id ? "text-white" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {mode === m.id && (
              <motion.span
                layoutId="mode-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue/80 to-cyan/60"
                transition={{ type: "spring", stiffness: 350, damping: 32 }}
              />
            )}
            <span className="relative">{m.label}</span>
          </button>
        ))}
      </div>
      <motion.p
        key={mode}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-3 max-w-md text-sm text-slate-400"
      >
        {active.blurb}
      </motion.p>
    </div>
  );
}
