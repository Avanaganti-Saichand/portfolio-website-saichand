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
    title: "Shift Scheduler App",
    description:
      "Built a React Native cross-platform application (iOS & Android) with real-time GPS/location tracking via Mapbox SDK, handling foreground location permissions on both platforms through platform-specific native permission flows in Xcode (iOS) and Android Studio (Android). Implemented Bluetooth Low Energy (BLE) device pairing within the app using a custom native module — Java/Kotlin bridge on Android, Swift bridge on iOS — to connect field workers' mobile devices to on-site scanning hardware for shift check-in verification. Built a high-performance PostgreSQL + MySQL backend on GCP with Kubernetes orchestration; implemented connection pooling and query optimization sustaining sub-100ms response times under concurrent multi-tenant load. Engineered a full CI/CD pipeline using GCP Cloud Build and Git branching with automated test gates, reducing release cycle time by 40% and enabling consistent weekly deployments with App Store and Google Play submission automation via Fastlane. Managed state with Redux Toolkit and memoized selectors; also built a parallel Flutter/Dart prototype of the scheduling screen using the BLoC pattern, validating Flutter as a viable alternative platform for a future rewrite.",
    icon: FaMobileAlt,
    technologies: [
      "React Native",
      "PostgreSQL",
      "MySQL",
      "GCP",
      "Kubernetes",
      "Mapbox SDK",
      "BLE",
      "Fastlane",
      "Flutter",
      "Redux Toolkit",
    ],
    githubLink: "https://github.com/Avanaganti-Saichand/ShiftSchedulerApp",
    skills: [
      { name: "Cross-Platform Mobile Development" },
      { name: "Native Module Bridging" },
      { name: "CI/CD Pipelines" },
      { name: "Backend Optimization" },
    ],
  },
  {
    id: 2,
    title: "AI-Driven Decision Support System",
    description:
      "Built a Python/Django backend with OAuth 2.0 authentication and JWT token lifecycle management (refresh rotation, expiry enforcement), securing API access for a multi-tenant decision support platform with both web and React Native mobile clients. Engineered REST API endpoints with role-based access control (RBAC) and rate-limiting middleware, enabling an AI decision engine to surface contextual LLM-powered recommendations to mobile clients via lightweight, mobile-optimized response payloads. Integrated AI inference endpoints into a mobile-ready API contract, delivering end-to-end LLM-assisted decision support from model inference through to a React Native UI — demonstrating AI-to-mobile integration as a practical, production-oriented pattern.",
    icon: FaNodeJs,
    technologies: [
      "Python",
      "Django",
      "OAuth 2.0",
      "JWT",
      "RBAC",
      "LLM APIs",
      "React Native",
    ],
    githubLink: "https://github.com/Avanaganti-Saichand/AI-Driven-Decision-Support",
    skills: [
      { name: "AI Integration" },
      { name: "Backend Security" },
      { name: "API Design" },
      { name: "Multi-Tenant Architecture" },
    ],
  },
  {
    id: 3,
    title: "Tech Home Electric Solutions",
    description:
      "Built a Next.js + TypeScript mobile-first Progressive Web App with server-side rendering (SSR) and static generation (SSG), achieving a Lighthouse mobile performance score of 94 and Core Web Vitals in the 'Good' threshold across all three metrics. Optimized REST API data-fetching with SWR stale-while-revalidate caching, deployed via Vercel edge network — reducing TTFB to under 120ms and improving repeat-visit engagement by 30% on mobile devices.",
    icon: FaReact,
    technologies: [
      "Next.js",
      "TypeScript",
      "PWA",
      "SSR",
      "SSG",
      "SWR",
      "Vercel",
    ],
    githubLink: "https://github.com/Avanaganti-Saichand/tech_home_solutions_web",
    liveLink: "https://techhomeelectric.in/",
    skills: [
      { name: "Progressive Web App" },
      { name: "Performance Optimization" },
      { name: "Mobile-First Design" },
      { name: "Edge Deployment" },
    ],
  },
];
