import Navbar from "@/components/Navbar";
import ScrollyStory from "@/components/scrolly/ScrollyStory";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-base">
      <Navbar />
      <ScrollyStory />
      <TechMarquee />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
