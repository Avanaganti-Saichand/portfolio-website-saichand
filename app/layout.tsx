import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saichand Avanaganti — Senior Software Engineer",
  description:
    "Senior software engineer specializing in full-stack mobile and web applications: React Native New Architecture, Swift/Kotlin native modules, Next.js, and AI/RAG systems.",
  keywords: [
    "Saichand Avanaganti", "React Native", "TurboModules", "Software Engineer",
    "Mobile Developer", "Next.js", "AI Engineer", "Full Stack",
  ],
  openGraph: {
    title: "Saichand Avanaganti — Senior Software Engineer",
    description:
      "Full-stack mobile & web engineering: React Native, native Swift/Kotlin bridges, Next.js, and applied AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
