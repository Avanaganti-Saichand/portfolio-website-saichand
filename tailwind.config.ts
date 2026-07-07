import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#050508",
        surface: "#0b0b12",
        card: "#0f0f17",
        line: "rgba(255,255,255,0.08)",
        accent: { DEFAULT: "#22d3ee", violet: "#8b5cf6", emerald: "#34d399" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        packet: "packet 2.4s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        packet: {
          "0%": { left: "0%", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
