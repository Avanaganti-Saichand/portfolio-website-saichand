import { marqueeTech } from "@/data/resume";

export default function TechMarquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div className="relative overflow-hidden border-y border-line bg-white/[0.02] py-4" aria-hidden>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-base to-transparent" />
      <div className="flex w-max animate-marquee gap-4">
        {row.map((t, i) => (
          <span
            key={i}
            className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 font-mono text-xs text-slate-400"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
