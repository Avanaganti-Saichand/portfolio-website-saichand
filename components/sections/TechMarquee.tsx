import { marqueeTech } from "@/data/resume";

export default function TechMarquee() {
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div className="relative border-y border-line bg-surface/60 py-4 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-base to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-base to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-mono text-sm text-gray-500">
            {t} <span className="text-accent/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
