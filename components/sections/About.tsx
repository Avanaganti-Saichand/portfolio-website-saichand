"use client";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { personal } from "@/data/resume";
import { FaMobileAlt, FaGlobe, FaBrain, FaRocket } from "react-icons/fa";

const pillars = [
  {
    icon: FaMobileAlt,
    title: "Mobile, all the way down",
    text: "React Native New Architecture on the surface — Swift, Kotlin, JSI, and TurboModules underneath. When the framework isn't enough, I write the native layer myself.",
    accent: "text-cyan-400",
  },
  {
    icon: FaBrain,
    title: "AI that ships",
    text: "On-device TensorFlow Lite inference, RAG pipelines with LangChain & LlamaIndex, Azure OpenAI embeddings — applied AI wired into real products, not demos.",
    accent: "text-pink-400",
  },
  {
    icon: FaGlobe,
    title: "Full-stack web",
    text: "Next.js with SSR/ISR, reusable component libraries, and Node.js/FastAPI microservices behind them — fast pages backed by fast APIs.",
    accent: "text-violet-400",
  },
  {
    icon: FaRocket,
    title: "Owned end-to-end",
    text: "API design → UI → performance profiling → Fastlane/Cloud Build release automation. I own features from first commit to store submission.",
    accent: "text-emerald-400",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 scroll-mt-24">
      <SectionHeading kicker="about" title="Engineer of the whole stack" subtitle={personal.summary} />
      <div className="grid gap-5 sm:grid-cols-2">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <SpotlightCard className="h-full p-6">
              <p.icon className={`text-2xl ${p.accent}`} />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">{p.text}</p>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
