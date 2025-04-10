"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroTitle from "@/components/HeroTitle";
import Terminal from "@/components/Terminal";
import SkillsGrid from "@/components/SkillsGrid";
import ActionButtons from "@/components/ActionButtons";

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-32 min-h-screen flex flex-col justify-center px-4"
    >
      <div className="max-w-4xl w-full mx-auto">
        <HeroTitle />
        <Terminal />
        <SkillsGrid />
        <ActionButtons />
      </div>
    </section>
  );
};

export default Hero;
