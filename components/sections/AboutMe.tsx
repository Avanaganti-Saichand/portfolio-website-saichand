"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from "../Styledpic";
import {
  FaLightbulb,
  FaCode,
  FaUtensils,
  FaHiking,
  FaPuzzlePiece,
} from "react-icons/fa";
import { useScrollSection } from "@/hooks/use-scroll-section";

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div
      id="about"
      className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20"
      ref={ref}
    >
      <motion.div
        className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              Software engineer with 6+ years of experience building and shipping cross-platform mobile applications and web products. Core stack is React Native for iOS and Android, alongside React.js and Next.js on the web, with Node.js and Python (FastAPI, Django) on the backend. Goes into the native layer when needed, writing bridge modules in Swift/Objective-C for iOS and Kotlin/Java for Android to handle hardware integrations like Bluetooth Low Energy, camera, and GPS that the cross-platform ecosystem does not fully cover. Has built and deployed Flutter/Dart applications and keeps up with Swift and Kotlin for native-specific work. Comfortable owning the full delivery cycle from writing features and designing APIs to setting up CI/CD pipelines and submitting to the App Store and Google Play. Recent work includes integrating LLM APIs, RAG pipelines, and vector search into mobile and web products.
            </p>
            <p>
              <strong>Education:</strong> Master's in Information Systems from Saint Louis University (Aug 2023 – May 2025, GPA: 3.75); B.Tech in Electronics & Communication Engineering from Guru Nanak Institutions Technical Campus (Mar 2017 – Mar 2021).
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="w-full max-w-[250px] aspect-square">
          <StyledPic />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
