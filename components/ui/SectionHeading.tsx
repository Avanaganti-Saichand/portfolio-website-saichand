"use client";
import Reveal from "./Reveal";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
}: {
  kicker: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mb-14">
      <p className="font-mono text-sm tracking-widest text-accent uppercase mb-3">
        <span className="text-gray-600 mr-2">{"//"}</span>
        {kicker}
      </p>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">{subtitle}</p>
      )}
    </Reveal>
  );
}
