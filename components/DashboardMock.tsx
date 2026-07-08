"use client";
import { motion } from "framer-motion";

const apis = [
  { path: "/v1/search", ms: "98ms", ok: true },
  { path: "/v1/infer", ms: "112ms", ok: true },
  { path: "/v1/sync", ms: "84ms", ok: true },
];

export default function DashboardMock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="glass relative rounded-2xl p-5"
      style={{ perspective: 800 }}
      aria-hidden
    >
      {/* window chrome */}
      <div className="mb-4 flex items-center gap-2 border-b border-line pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
        <span className="ml-2 font-mono text-[11px] text-slate-500">saichand · product console</span>
        <span className="ml-auto flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          all systems live
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* mobile app card */}
        <div className="rounded-xl border border-line bg-white/[0.03] p-3.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-cyan">Mobile</p>
          <p className="mt-1 text-sm font-semibold text-white">Ultopia</p>
          <p className="text-[11px] text-slate-500">iOS · Android · Fabric</p>
          <div className="mt-3 flex items-end gap-1" aria-hidden>
            {[38, 55, 42, 66, 58, 74, 70, 86].map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 4 }}
                animate={{ height: h * 0.4 }}
                transition={{ delay: 0.7 + i * 0.07, duration: 0.5 }}
                className="w-2.5 rounded-sm bg-gradient-to-t from-blue/50 to-cyan/80"
              />
            ))}
          </div>
          <p className="mt-2 font-mono text-[10px] text-emerald-300">60fps sustained</p>
        </div>

        {/* AI pipeline card */}
        <div className="rounded-xl border border-line bg-white/[0.03] p-3.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-violet-300">AI Pipeline</p>
          <p className="mt-1 text-sm font-semibold text-white">RAG Workflow</p>
          <div className="mt-3 space-y-2 font-mono text-[10px]">
            {["embed()", "retrieve(top_k=5)", "generate(ctx)"].map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0.25 }}
                animate={{ opacity: [0.25, 1, 0.25] }}
                transition={{ repeat: Infinity, duration: 3, delay: i * 1 }}
                className="flex items-center gap-2 text-slate-300"
              >
                <span className="h-1 w-1 rounded-full bg-cyan" />
                {s}
              </motion.div>
            ))}
          </div>
          <p className="mt-2.5 font-mono text-[10px] text-emerald-300">latency −40% on-device</p>
        </div>

        {/* API status */}
        <div className="rounded-xl border border-line bg-white/[0.03] p-3.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-blue">API Status</p>
          <div className="mt-2.5 space-y-2">
            {apis.map((a) => (
              <div key={a.path} className="flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-300">{a.path}</span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  {a.ms}
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* performance metrics */}
        <div className="rounded-xl border border-line bg-white/[0.03] p-3.5">
          <p className="font-mono text-[10px] uppercase tracking-wider text-emerald-300">Delivery</p>
          <div className="mt-2.5 grid grid-cols-2 gap-2">
            <div>
              <p className="text-lg font-bold text-white">40%</p>
              <p className="text-[10px] leading-tight text-slate-500">faster releases</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">25%</p>
              <p className="text-[10px] leading-tight text-slate-500">fewer re-renders</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">&lt;100ms</p>
              <p className="text-[10px] leading-tight text-slate-500">API responses</p>
            </div>
            <div>
              <p className="text-lg font-bold text-white">2</p>
              <p className="text-[10px] leading-tight text-slate-500">app stores</p>
            </div>
          </div>
        </div>
      </div>

      {/* glow */}
      <div className="absolute -inset-x-8 -bottom-10 h-24 bg-blue/10 blur-3xl" aria-hidden />
    </motion.div>
  );
}
