"use client";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaApple, FaAndroid, FaReact } from "react-icons/fa";
import { SiSwift, SiKotlin, SiTensorflow, SiTypescript } from "react-icons/si";

const screens = ["app", "bridge", "rag"] as const;
type Screen = (typeof screens)[number];

function AppScreen() {
  return (
    <div className="flex h-full flex-col gap-2 p-3">
      <div className="flex items-center gap-2">
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500" />
        <div>
          <div className="h-2 w-16 rounded bg-white/25" />
          <div className="mt-1 h-1.5 w-10 rounded bg-white/10" />
        </div>
        <span className="ml-auto font-mono text-[8px] text-emerald-400">60fps</span>
      </div>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15 * i, type: "spring", stiffness: 200, damping: 20 }}
          className="rounded-lg border border-white/10 bg-white/5 p-2"
        >
          <div className="h-1.5 w-3/4 rounded bg-white/20" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/10" />
          <div className="mt-2 flex gap-1">
            <div className="h-3 w-10 rounded-full bg-cyan-400/20" />
            <div className="h-3 w-8 rounded-full bg-violet-400/20" />
          </div>
        </motion.div>
      ))}
      <motion.div
        animate={{ y: [0, -3, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-auto flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500/80 to-violet-500/80 py-2"
      >
        <FaReact className="text-[10px] text-white" />
        <span className="font-mono text-[8px] text-white">React Native · Fabric</span>
      </motion.div>
    </div>
  );
}

function BridgeScreen() {
  return (
    <div className="flex h-full flex-col justify-center gap-3 p-3 font-mono text-[8px]">
      <div className="rounded-lg border border-cyan-400/30 bg-cyan-400/10 p-2 text-cyan-300">
        <div className="mb-1 flex items-center gap-1"><SiTypescript /> JS Thread</div>
        <div className="text-white/50">await detect(image)</div>
      </div>
      <div className="relative mx-4 h-8">
        <div className="absolute top-1/2 h-px w-full bg-gradient-to-r from-cyan-400/60 to-violet-400/60" />
        <div className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 animate-packet rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-white/40">JSI · TurboModule</span>
      </div>
      <div className="rounded-lg border border-violet-400/30 bg-violet-400/10 p-2 text-violet-300">
        <div className="mb-1 flex items-center gap-1"><SiSwift /> <SiKotlin /> Native</div>
        <div className="text-white/50">TFLite.run(tensor)</div>
      </div>
      <div className="mt-1 text-center text-emerald-400">−40% latency · on-device</div>
    </div>
  );
}

function RagScreen() {
  const lines = [
    { t: "> embed(query)", c: "text-cyan-300" },
    { t: "vector search: 0.92 ✓", c: "text-white/50" },
    { t: "> retrieve(top_k=5)", c: "text-cyan-300" },
    { t: "docs: 5 chunks", c: "text-white/50" },
    { t: "> llm.generate(ctx)", c: "text-cyan-300" },
    { t: "streaming tokens…", c: "text-emerald-400" },
  ];
  return (
    <div className="flex h-full flex-col gap-1.5 p-3 font-mono text-[8px]">
      <div className="mb-1 flex items-center gap-1 text-white/60">
        <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/70" />
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        <span className="ml-1">rag-pipeline</span>
      </div>
      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 * i }}
          className={l.c}
        >
          {l.t}
        </motion.div>
      ))}
      <motion.div
        animate={{ opacity: [1, 0.3, 1] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="text-white"
      >
        ▊
      </motion.div>
    </div>
  );
}

const labels: Record<Screen, string> = {
  app: "Mobile UI",
  bridge: "Native Bridge",
  rag: "AI Backend",
};

export default function PhoneMock() {
  const [screen, setScreen] = useState<Screen>("app");
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const t = setInterval(() => {
      setScreen((s) => screens[(screens.indexOf(s) + 1) % screens.length]);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -12, y: px * 14 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative flex items-center justify-center py-6"
      style={{ perspective: 900 }}
    >
      {/* glow */}
      <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-accent-violet/20 blur-[100px]" />

      {/* floating badges */}
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}
        className="absolute left-0 top-10 z-10 flex items-center gap-1.5 rounded-full border border-line glass px-3 py-1.5 text-xs text-gray-300">
        <SiSwift className="text-orange-400" /> Swift
      </motion.div>
      <motion.div animate={{ y: [0, 9, 0] }} transition={{ repeat: Infinity, duration: 4 }}
        className="absolute right-0 top-24 z-10 flex items-center gap-1.5 rounded-full border border-line glass px-3 py-1.5 text-xs text-gray-300">
        <SiKotlin className="text-violet-400" /> Kotlin
      </motion.div>
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4.4 }}
        className="absolute bottom-24 left-2 z-10 flex items-center gap-1.5 rounded-full border border-line glass px-3 py-1.5 text-xs text-gray-300">
        <SiTensorflow className="text-orange-300" /> TF Lite
      </motion.div>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 3.8 }}
        className="absolute bottom-10 right-4 z-10 flex items-center gap-1.5 rounded-full border border-line glass px-3 py-1.5 text-xs text-gray-300">
        <FaReact className="text-cyan-400" /> Fabric
      </motion.div>

      {/* phone */}
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 150, damping: 18 }}
        className="relative h-[420px] w-[210px] rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-[#15151f] to-[#0a0a12] p-2 shadow-2xl shadow-black/60"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="absolute left-1/2 top-3 z-20 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden rounded-[1.7rem] bg-[#07070d]">
          <div className="flex items-center justify-between px-4 pt-2 font-mono text-[7px] text-white/40">
            <span>9:41</span>
            <span className="flex items-center gap-1"><FaApple /><FaAndroid /></span>
          </div>
          <div className="h-[calc(100%-40px)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={screen}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                {screen === "app" && <AppScreen />}
                {screen === "bridge" && <BridgeScreen />}
                {screen === "rag" && <RagScreen />}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute bottom-1.5 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-white/25" />
        </div>
      </motion.div>

      {/* screen switcher */}
      <div className="absolute -bottom-2 flex gap-2">
        {screens.map((s) => (
          <button
            key={s}
            onClick={() => setScreen(s)}
            className={`rounded-full border px-3 py-1 font-mono text-[10px] transition-all ${
              screen === s
                ? "border-accent/50 bg-accent/15 text-accent"
                : "border-line text-gray-500 hover:text-gray-300"
            }`}
          >
            {labels[s]}
          </button>
        ))}
      </div>
    </div>
  );
}
