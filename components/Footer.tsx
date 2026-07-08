import { personal } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-sm text-slate-500 md:flex-row">
        <p>© {new Date().getFullYear()} {personal.name} · {personal.location}</p>
        <p className="font-mono text-xs">
          <span className="text-blue">const</span> status = <span className="text-emerald-400">&quot;shipping&quot;</span>;
        </p>
      </div>
    </footer>
  );
}
