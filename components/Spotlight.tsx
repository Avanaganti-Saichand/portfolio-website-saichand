"use client";
import { useEffect, useRef } from "react";

export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    let x = -600, y = -600;
    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (ref.current)
            ref.current.style.transform = `translate(${x - 300}px, ${y - 300}px)`;
        });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-70"
      style={{
        background:
          "radial-gradient(circle, rgba(59,130,246,0.09) 0%, rgba(34,211,238,0.04) 40%, transparent 65%)",
        transform: "translate(-600px, -600px)",
      }}
    />
  );
}
