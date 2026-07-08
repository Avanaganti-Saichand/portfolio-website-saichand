import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saichand Avanaganti — Senior Software Engineer",
  description:
    "Building mobile products, AI workflows, and scalable full-stack systems. React Native, Next.js, backend, and AI-powered products from idea to production.",
  openGraph: {
    title: "Saichand Avanaganti — Senior Software Engineer",
    description:
      "Building mobile products, AI workflows, and scalable full-stack systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-base font-sans text-[#dbe3ee] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
