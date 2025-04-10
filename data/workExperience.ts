// data/workExperience.ts
import {
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaCloud,
  FaBolt,
  FaChalkboardTeacher,
  FaBriefcase,
} from "react-icons/fa";
import { SiFirebase, SiPostgresql, SiMongodb } from "react-icons/si";
import React from "react";

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Freelance Projects",
    position: "Freelance Software Developer",
    duration: "Aug 2023 – Present",
    year: 2023,
    description: [
      "Building mobile apps and full-stack solutions that work as hard as you do.",
      "Collaborated with early-stage founders to rapidly prototype and launch MVPs using React Native and Firebase.",
      "Developed custom API integrations and admin panels to automate tasks, reduce manual overhead, and make teams say, 'Finally!'",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Real Variable Digital Asset Services",
    position: "Mobile App Developer",
    duration: "Sep 2021 – July 2023",
    year: 2021,
    description: [
      "Spearheaded mobile app development for a digital asset platform with React Native, ensuring smooth UX across Android & iOS.",
      "Integrated secure wallet systems and RESTful APIs to handle high-volume crypto transactions reliably.",
      "Enhanced UI/UX with animations and navigation optimizations that made scrolling almost therapeutic.",
      "Refactored core modules to improve performance and scalability — and made the dev team breathe easier.",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Firebase", icon: SiFirebase },
    ],
    logo: "/logos/real-variable.jpeg",
  },
  {
    company: " Globalastrix Techno Solutions Private Limited",
    position: "Software Developer",
    duration: "Sep 2018 – Aug 2021",
    year: 2018,
    description: [
      "Developed cross-platform apps and internal tools that helped clients cut operational delays by 35%.",
      "Built and deployed Node.js backends integrated with PostgreSQL/MongoDB, turning scattered data into organized dashboards.",
      "Maintained and scaled codebases like a plant parent — always nurturing, pruning, and occasionally debugging at 2 AM.",
      "Worked in agile teams delivering multiple B2B and B2C solutions from scratch to production.",
    ],
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Ridhan Technologies",
    position: "Mobile App Developer Intern",
    duration: "May 2019 – Aug 2019",
    year: 2019,
    description: [
      "Got hands dirty with real-world React Native projects during the early mobile days.",
      "Assisted in developing reusable components, debugging layouts, and learning why semicolons are not optional.",
      "Contributed to UI improvements and feature testing while absorbing industry best practices like a sponge.",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "UI Debugging", icon: FaLaptopCode },
    ],
    logo: "/logos/ridhan.png",
  },
];
