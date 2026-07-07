"use client";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Monolith = dynamic(() => import("./Monolith"), { ssr: false });

export default function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let webgl = false;
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webgl = false;
    }
    setShow(motionOk && webgl);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="h-full w-full" aria-hidden>
      {show && inView && <Monolith />}
    </div>
  );
}
