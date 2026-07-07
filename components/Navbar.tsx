"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { personal } from "@/data/resume";

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#publications" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <motion.div
        className="h-[2px] origin-left bg-gradient-to-r from-accent via-accent-violet to-pink-400"
        style={{ scaleX: progress }}
      />
      <nav
        className={`mx-auto mt-3 flex max-w-5xl items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-300 ${
          scrolled ? "glass border-line shadow-lg shadow-black/40" : "border-transparent"
        } mx-4 md:mx-auto`}
      >
        <a href="#top" className="font-mono text-sm text-white">
          <span className="text-accent">~/</span>saichand
          <span className="animate-pulse text-accent">_</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-gray-400">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-white">
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={`mailto:${personal.email}`}
          className="rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent transition-all hover:bg-accent/20 hover:border-accent/50"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}
