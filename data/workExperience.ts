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
    company: "Breathe It",
    position: "Mobile Developer",
    duration: "Dec 2024 – Feb 2025",
    year: 2024,
    description: [
      "Delivered a cross-platform SaaS mobile application to **50,000+ users** using **React, React Native, HTML, and JS** for iOS and Android[cite: 16].",
      "Enabled scalable, secure mobile features supporting **100,000+ transactions monthly** by building and integrating backend services using **Node, TypeScript, serverless AWS (Lambda, API Gateway, S3), PostgreSQL, and Firebase**[cite: 17].",
      "Accelerated mobile release cycles by **40%** by managing CI/CD pipelines with **GitHub Actions** to automate versioning, testing, and release workflows[cite: 18].",
      "Enhanced mobile app engagement by **25%** by implementing **GenAI-powered chat, recommendations, and summarization** using **OpenAI APIs**[cite: 19].",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "AWS Serverless", icon: FaCloud },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
    logo: "/logos/freelance.png", 
  },
  {
    company: "Real Variable",
    position: "System Analyst",
    duration: "Sep 2021 – June 2023",
    year: 2021,
    description: [
      "Reduced development time by **80%** by developing reusable UI components using **React Native, React, JavaScript (JS), and TypeScript** for Android and iOS supply chain SaaS apps[cite: 24].",
      "Improved application speed and scalability by refactoring front-end and full-stack codebase, reducing code size by **50%** and optimizing performance[cite: 25].",
      "Enhanced team performance by leading and mentoring **2 junior developers**, driving best practices in **React, React Native, and Node-based** backend integrations[cite: 26].",
      "Streamlined collaboration between front-end and backend teams by integrating **Node and serverless GCP services**[cite: 27].",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "TypeScript", icon: FaLaptopCode },
      { name: "GCP Serverless", icon: FaCloud },
    ],
    logo: "/logos/real-variable.jpeg",
  },
  {
    company: " Globalastrix Techno Solutions Private Limited",
    position: "Software Developer",
    duration: "Sep 2018 – Aug 2021",
    year: 2018,
    description: [
      "Delivered high-quality cross-platform mobile apps for iOS and Android using **React Native, React, Node.js, JS, TypeScript, and HTML**[cite: 32].",
      "Increased backend data processing speed by **30%** by leading integration of **RESTful APIs and WebSockets** with Node.js and implementing serverless backend solutions[cite: 33].",
      "Reduced deployment time by **40%** by managing **CI/CD pipelines** and automating deployments on **AWS, Firebase, and Netlify**[cite: 34].",
      "Enhanced application responsiveness by implementing caching strategies, lazy loading, and performance optimizations across **React, Vue.js, and Node.js** stacks[cite: 35].",
    ],
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "React Native", icon: FaReact },
      { name: "AWS/Firebase", icon: FaCloud },
      { name: "REST APIs/WebSockets", icon: FaBolt },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Ridhan Technologies",
    position: "Software Intern",
    duration: "May 2019 – Aug 2019",
    year: 2019,
    description: [
      "Reduced order placement time by **30%** on a SaaS event management platform by revamping the front-end with **React, JS, and Redux**[cite: 40].",
      "Enhanced client engagement by developing responsive front-end interfaces with **React** and integrating with backend services via **REST API and Axios**[cite: 41].",
      "Improved platform scalability and maintainability by applying **TypeScript** principles within the JS codebase and developing modular, reusable front-end components[cite: 43].",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: FaLaptopCode },
      { name: "TypeScript", icon: FaLaptopCode },
      { name: "REST API", icon: FaBolt },
    ],
    logo: "/logos/ridhan.png",
  },
];