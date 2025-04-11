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
              Hey there 👋 I&rsquo;m <strong>Saichand Avanaganti</strong> — a
              Mobile &amp; Full Stack Developer who speaks fluent React Native,
              negotiates with Node.js, and occasionally argues with TypeScript
              (but we always patch things up).
            </p>
            <p>
              With 3+ years of experience building cross-platform apps and
              scalable backend systems, I&rsquo;ve crafted everything from
              real-time chat apps to geofence-based attendance trackers. I love
              building apps that are fast, user-friendly, and can survive a
              production bug or two 😅.
            </p>
            <p>
              I&rsquo;ve worked with teams at Real Variable and Bluetick IT
              Services and currently pursuing my Master&rsquo;s in Information
              Systems at Saint Louis University. Whether it&rsquo;s deploying
              APIs or animating UI transitions, I enjoy turning ideas into
              clean, functional code.
            </p>
            <p>When I&rsquo;m not coding, you&rsquo;ll probably find me:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <FaUtensils className="inline-block mr-2" /> Perfecting my
                biryani recipe (spicy enough to wake the neighbors)
              </li>
              <li>
                <FaHiking className="inline-block mr-2" /> Exploring new trails
                and pretending I didn&rsquo;t take a wrong turn
              </li>
              <li>
                <FaPuzzlePiece className="inline-block mr-2" /> Solving bugs
                that I may or may not have introduced myself
              </li>
            </ul>
            <p>
              I believe in writing code that&rsquo;s easy to read, fun to
              maintain, and built with purpose. Currently diving deeper into
              system design, real-time communication, and building flexible UI
              kits for better developer experience.
            </p>
            <p>
              I&apos;m passionate about lifelong learning and solving real-world
              problems with tech—bonus points if the UI looks good while doing
              it!
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
