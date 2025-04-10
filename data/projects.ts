import {
  FaReact,
  FaNodeJs,
  FaEthereum,
  FaMobileAlt,
  FaWarehouse,
  FaCar,
} from "react-icons/fa";
import { SiFirebase, SiPostgresql } from "react-icons/si";

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
  liveLink?: string; // Optional live deployment link
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Next.js Portfolio Website",
    description:
      "A personal portfolio built with Next.js, TailwindCSS, and shadcn/ui, showcasing projects, skills, and work experience with smooth animations and a professional layout.",
    icon: FaReact,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
    ],
    githubLink:
      "https://github.com/Avanaganti-Saichand/portfolio-website-saichand",
    skills: [
      { name: "Frontend Development" },
      { name: "UI/UX Design" },
      { name: "Responsive Web Design" },
      { name: "Performance Optimization" },
    ],
  },
  {
    id: 2,
    title: "Shift Scheduler App",
    description:
      "A React Native app with backend integration for managing employee shifts. Features include admin-controlled permissions, real-time updates, and secure authentication.",
    icon: FaNodeJs,
    technologies: [
      "React Native",
      "Node.js",
      "PostgreSQL",
      "Socket.io",
      "JWT",
      "Express",
    ],
    githubLink: "https://github.com/Avanaganti-Saichand/ShiftSchedulerApp",
    skills: [
      { name: "Mobile App Development" },
      { name: "Role-Based Access Control" },
      { name: "Real-Time Communication" },
      { name: "REST API Development" },
    ],
  },
  {
    id: 3,
    title: "NFT Mart - Crypto Marketplace",
    description:
      "A blockchain-based NFT marketplace built with React Native and Web3.js, allowing users to mint, buy, and sell NFTs through Ethereum smart contracts.",
    icon: FaEthereum,
    technologies: [
      "React Native",
      "Solidity",
      "Firebase",
      "Web3.js",
      "Smart Contracts",
    ],
    githubLink: "https://github.com/Avanaganti-Saichand/NFT_MART",
    skills: [
      { name: "Web3 Development" },
      { name: "Smart Contract Integration" },
      { name: "Blockchain" },
      { name: "Firebase Auth" },
    ],
  },
  {
    id: 4,
    title: "Tech Home Automation (Web)",
    description:
      "A professional website for an automation and electrical services company, built with Next.js and TailwindCSS. Includes form handling, dynamic sections, and animations.",
    icon: FaReact,
    technologies: ["Next.js", "React", "TailwindCSS", "EmailJS", "Vercel"],
    githubLink:
      "https://github.com/Avanaganti-Saichand/tech_home_solutions_web",
    liveLink: "https://techhomeelectric.in/",
    skills: [
      { name: "Landing Page Development" },
      { name: "Contact Form Integration" },
      { name: "TailwindCSS Theming" },
      { name: "Deployment on Vercel" },
    ],
  },
  {
    id: 5,
    title: "MRP Dashboard",
    description:
      "An inventory dashboard for Material Requirements Planning. It includes purchase order processing, real-time material tracking, and custom Excel automation.",
    icon: FaWarehouse,
    technologies: ["React", "Node.js", "ExcelJS", "CSV", "Tailwind"],
    githubLink: "https://github.com/Avanaganti-Saichand/MRP_DASHBOARD",
    liveLink: "https://mrpdashboard-teamvibe.streamlit.app/",
    skills: [
      { name: "Excel Automation" },
      { name: "Inventory Management" },
      { name: "Data Processing" },
      { name: "Dashboard UI Design" },
    ],
  },
  {
    id: 6,
    title: "Focus App",
    description:
      "A productivity timer app built with React Native to help users focus using Pomodoro-like sessions, distraction blocking, and real-time session tracking.",
    icon: FaMobileAlt,
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    githubLink: "https://github.com/Avanaganti-Saichand/Focus-App",
    skills: [
      { name: "Mobile App UI" },
      { name: "Focus Timer" },
      { name: "State Management" },
      { name: "Session Tracking" },
    ],
  },
  {
    id: 7,
    title: "Tesla Clone",
    description:
      "A visually polished clone of the Tesla website showcasing landing page design, smooth scroll effects, and responsive mobile views.",
    icon: FaCar,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/Avanaganti-Saichand/TeslaClone",
    skills: [
      { name: "Frontend Development" },
      { name: "Responsive Design" },
      { name: "Landing Page Clone" },
      { name: "Animation & UX" },
    ],
  },
];
