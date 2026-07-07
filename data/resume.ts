import { IconType } from "react-icons";
import {
  FaReact, FaNodeJs, FaMobileAlt, FaApple, FaAndroid, FaAws, FaDocker, FaPython, FaGithub, FaLinkedin, FaInstagram, FaBrain,
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiSwift, SiKotlin, SiTensorflow, SiPostgresql, SiMongodb, SiRedis, SiFastapi, SiDjango, SiGooglecloud, SiFirebase, SiLangchain, SiGraphql, SiTailwindcss, SiRedux, SiVercel, SiGithubactions, SiFlutter, SiJavascript, SiHuggingface, SiExpo,
} from "react-icons/si";

export const personal = {
  name: "Saichand Avanaganti",
  role: "Senior Software Engineer",
  tagline: "Mobile · Web · Applied AI",
  email: "saichand.avanaganti@outlook.com",
  phone: "+1 (314) 760-6890",
  location: "USA · Remote",
  github: "https://github.com/Avanaganti-Saichand",
  linkedin: "https://www.linkedin.com/in/saichand-avanaganti-1b51401a4/",
  instagram: "https://www.instagram.com/saichand_avanaganti/",
  summary:
    "Senior software engineer specializing in full-stack mobile and web applications. I deliver enterprise React Native solutions on the New Architecture (TurboModules, Fabric), author Swift/Kotlin native bridge modules for on-device TensorFlow Lite inference, and build Next.js frontends and AI-powered backend services. I own features end-to-end — from API design through UI, performance profiling, and CI/CD automation.",
  roles: [
    "React Native Engineer",
    "Full-Stack Web Developer",
    "Native iOS/Android Bridge Author",
    "AI & RAG Systems Builder",
  ],
};

export const stats = [
  { value: "40%", label: "query latency cut via on-device TF Lite" },
  { value: "60fps", label: "animations shipped across iOS & Android" },
  { value: "40%", label: "faster releases with Fastlane CI/CD" },
  { value: "5+", label: "years building production software" },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
  accent: string;
}

export const experience: Experience[] = [
  {
    company: "Maloka Labs",
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    location: "Remote, USA",
    accent: "#22d3ee",
    highlights: [
      "Build enterprise React Native apps on the New Architecture (TurboModules, Fabric) for iOS & Android, maintaining backward-compatible legacy bridge support during incremental client migrations.",
      "Author Swift & Kotlin native modules for TensorFlow Lite on-device inference via JSI APIs — eliminating server round-trips and cutting average query latency by 40%.",
      "Develop Next.js/React frontends with SSR optimization, dynamic routing, and reusable component libraries consumed across multiple client web properties.",
      "Build Node.js & FastAPI microservices with LangChain, LlamaIndex, and Azure OpenAI embeddings for document processing and vector search.",
      "Own end-to-end release automation with Fastlane + GCP Cloud Build — code signing, versioning, App Store & Play Store submission — reducing release cycle time by 40%.",
      "Delivered APNs/FCM push pipelines that deep-link payloads to specific in-app screens via React Navigation dynamic routing.",
    ],
    tech: ["React Native", "TurboModules", "Fabric", "Swift", "Kotlin", "TensorFlow Lite", "Next.js", "FastAPI", "LangChain", "Azure OpenAI", "Fastlane", "GCP"],
  },
  {
    company: "BreatheIT",
    role: "Senior Mobile Developer",
    period: "Jun 2024 — May 2025",
    location: "Remote, USA",
    accent: "#8b5cf6",
    highlights: [
      "Converted a FlutterFlow web app into a production React Native mobile app for iOS & Android — rewriting UI, state management, and API layers — enabling the company's first mobile product launch.",
      "Shipped Ultopia to the App Store & Google Play with Reanimated 2 transitions and Gesture Handler 2 swipe interactions at a consistent 60fps on both platforms.",
      "Wrote Swift native modules using AVFoundation for camera document capture and Keychain for secure credential storage, bridged with TypeScript-typed interfaces.",
      "Wrote Kotlin modules for Camera2 capture, Keystore-backed storage, and background services — keeping an identical TypeScript-facing API contract across platforms.",
      "Integrated an LLM-powered recommendation engine into the mobile UI with Suspense boundaries and memoized Redux selectors, cutting unnecessary re-renders by 25%.",
    ],
    tech: ["React Native", "Swift", "Kotlin", "Reanimated 2", "Gesture Handler", "AVFoundation", "Keychain", "Camera2", "Redux Toolkit", "LLM APIs"],
  },
  {
    company: "Real Variable",
    role: "Systems Analyst",
    period: "Sep 2020 — Jun 2023",
    location: "Hyderabad, India",
    accent: "#34d399",
    highlights: [
      "Analysed, designed, and implemented Realware & Realreco — retail logistics mobile apps used by enterprise clients for orders, inventory, and supply chain, with offline-first AsyncStorage sync and deep-link routing.",
      "Designed NLP pipelines with spaCy and Hugging Face Transformers for entity extraction and document classification, reducing manual data processing by 35%.",
      "Optimised PostgreSQL & MongoDB queries via indexing and restructuring — key API responses under 200ms for mobile clients on low-bandwidth connections.",
      "Built supply-chain forecasting models with scikit-learn and TensorFlow 2.x — feature engineering, cross-validation, hyperparameter tuning — improving forecast accuracy.",
      "Produced system architecture docs, data-flow diagrams, and API contracts referenced by dev and QA teams across the project lifecycle.",
    ],
    tech: ["React Native", "AsyncStorage", "spaCy", "Hugging Face", "PostgreSQL", "MongoDB", "scikit-learn", "TensorFlow"],
  },
  {
    company: "Adobe",
    role: "Software Development Intern",
    period: "May 2019 — Jul 2019",
    location: "Hyderabad, India",
    accent: "#f472b6",
    highlights: [
      "Built IoT sensor-data ingestion pipelines for Internet-of-Vehicles prototypes using AWS services and PostgreSQL, processing real-time structured streams for downstream analytics.",
      "Contributed React/JavaScript code to internal UI tooling — reusable components and bug fixes with Git and Docker — streamlining the component library.",
    ],
    tech: ["AWS", "PostgreSQL", "React", "JavaScript", "Docker", "Git"],
  },
];

export interface SkillCategory {
  title: string;
  icon: IconType;
  accent: string;
  skills: { name: string; icon?: IconType }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Mobile",
    icon: FaMobileAlt,
    accent: "#22d3ee",
    skills: [
      { name: "React Native", icon: FaReact }, { name: "TurboModules / Fabric" }, { name: "Hermes" },
      { name: "Swift", icon: SiSwift }, { name: "Objective-C" }, { name: "Kotlin", icon: SiKotlin }, { name: "Java" },
      { name: "Reanimated 2/3" }, { name: "Gesture Handler 2" }, { name: "APNs / FCM" },
      { name: "React Navigation" }, { name: "Expo", icon: SiExpo }, { name: "CodePush" }, { name: "Flutter", icon: SiFlutter },
    ],
  },
  {
    title: "Frontend",
    icon: FaReact,
    accent: "#8b5cf6",
    skills: [
      { name: "React.js", icon: FaReact }, { name: "Next.js (SSR · ISR · App Router)", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript }, { name: "JavaScript", icon: SiJavascript },
      { name: "Redux Toolkit", icon: SiRedux }, { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Material UI" }, { name: "HTML5 / CSS3" },
    ],
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    accent: "#34d399",
    skills: [
      { name: "Node.js", icon: FaNodeJs }, { name: "Python", icon: FaPython }, { name: "FastAPI", icon: SiFastapi },
      { name: "Django", icon: SiDjango }, { name: "Flask" }, { name: "REST APIs" }, { name: "GraphQL", icon: SiGraphql },
      { name: "JWT / OAuth 2.0" }, { name: "WebSockets" },
    ],
  },
  {
    title: "Data",
    icon: SiPostgresql,
    accent: "#38bdf8",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql }, { name: "MongoDB", icon: SiMongodb }, { name: "Firebase", icon: SiFirebase },
      { name: "Redis", icon: SiRedis }, { name: "MySQL" }, { name: "SQLite" }, { name: "SQL Optimisation" },
      { name: "ETL Pipelines" }, { name: "Data Modelling" },
    ],
  },
  {
    title: "AI / ML",
    icon: FaBrain,
    accent: "#f472b6",
    skills: [
      { name: "LangChain", icon: SiLangchain }, { name: "LangGraph" }, { name: "LlamaIndex" },
      { name: "Azure OpenAI" }, { name: "RAG Pipelines" }, { name: "Vector Search" },
      { name: "TensorFlow Lite", icon: SiTensorflow }, { name: "spaCy" }, { name: "Hugging Face", icon: SiHuggingface },
      { name: "scikit-learn" }, { name: "OpenAI API" }, { name: "Prompt Engineering" },
    ],
  },
  {
    title: "DevOps",
    icon: FaDocker,
    accent: "#fb923c",
    skills: [
      { name: "AWS", icon: FaAws }, { name: "GCP", icon: SiGooglecloud }, { name: "Azure" },
      { name: "Docker", icon: FaDocker }, { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Fastlane" }, { name: "Bitrise" }, { name: "GCP Cloud Build" }, { name: "CI/CD" }, { name: "Vercel", icon: SiVercel },
    ],
  },
];

export interface Project {
  title: string;
  type: string;
  description: string;
  outcomes: string[];
  tech: string[];
  github?: string;
  live?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    title: "Ultopia",
    type: "Production Mobile App · App Store & Google Play",
    accent: "#8b5cf6",
    description:
      "Converted a FlutterFlow web app into a production React Native app and shipped it to both stores — the company's first mobile product. Swift (AVFoundation, Keychain) and Kotlin (Camera2, Keystore) native modules behind one TypeScript API contract.",
    outcomes: ["Consistent 60fps Reanimated 2 transitions", "Secure on-device document capture & credential storage", "LLM-powered recommendations with 25% fewer re-renders"],
    tech: ["React Native", "Swift", "Kotlin", "Reanimated 2", "TypeScript", "LLM APIs"],
  },
  {
    title: "Shift Scheduler App",
    type: "Cross-Platform Mobile · Field Operations",
    accent: "#22d3ee",
    description:
      "React Native app with real-time GPS tracking via Mapbox and BLE pairing to on-site scanning hardware through custom Swift/Kotlin native modules. PostgreSQL/MySQL backend on GCP with Kubernetes, sustaining sub-100ms responses under multi-tenant load.",
    outcomes: ["Sub-100ms API responses under concurrent load", "40% faster release cycles via GCP Cloud Build + Fastlane", "BLE hardware pairing via custom native bridges"],
    tech: ["React Native", "Mapbox", "BLE", "PostgreSQL", "GCP", "Kubernetes", "Fastlane"],
    github: "https://github.com/Avanaganti-Saichand/ShiftSchedulerApp",
  },
  {
    title: "AI-Driven Decision Support",
    type: "AI Platform · Multi-Tenant Backend",
    accent: "#f472b6",
    description:
      "Django backend with OAuth 2.0 + JWT lifecycle management securing a multi-tenant decision platform. REST endpoints with RBAC and rate-limiting surface contextual LLM recommendations to React Native clients through mobile-optimized payloads.",
    outcomes: ["End-to-end LLM inference → mobile UI pattern", "RBAC + rate-limited multi-tenant API", "Token refresh rotation & expiry enforcement"],
    tech: ["Python", "Django", "OAuth 2.0", "JWT", "LLM APIs", "React Native"],
    github: "https://github.com/Avanaganti-Saichand/AI-Driven-Decision-Support",
  },
  {
    title: "Realware & Realreco",
    type: "Enterprise Retail Logistics Suite",
    accent: "#34d399",
    description:
      "Retail logistics mobile apps used by enterprise clients to manage orders, inventory, and supply chain — offline-first AsyncStorage sync, deep-link routing, and NLP pipelines (spaCy, Transformers) that cut manual data processing by 35%.",
    outcomes: ["Offline-first sync for low-bandwidth field use", "35% less manual processing via NLP pipelines", "Key APIs under 200ms after query optimisation"],
    tech: ["React Native", "AsyncStorage", "spaCy", "Transformers", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tech Home Electric Solutions",
    type: "Next.js PWA · Live in Production",
    accent: "#38bdf8",
    description:
      "Mobile-first Progressive Web App with SSR + SSG hitting a 94 Lighthouse mobile score and 'Good' Core Web Vitals across all metrics. SWR stale-while-revalidate caching on Vercel's edge network brings TTFB under 120ms.",
    outcomes: ["94 Lighthouse mobile performance score", "TTFB under 120ms via edge deployment", "30% better repeat-visit engagement on mobile"],
    tech: ["Next.js", "TypeScript", "PWA", "SSR/SSG", "SWR", "Vercel"],
    github: "https://github.com/Avanaganti-Saichand/tech_home_solutions_web",
    live: "https://techhomeelectric.in/",
  },
];

export const publications = [
  {
    title: "Simulation of Self-Driven Car on PyTorch Platform",
    venue: "IJARESM · Vol 10, Issue 3 · March 2022",
    description:
      "Autonomous vehicle simulation using PyTorch, deep learning, and reinforcement learning — a self-driving car environment that learns optimal navigation paths through trial-and-error interaction.",
    link: "https://www.ijaresm.com/simulation-of-self-driven-car-on-pytorch-platform",
    tags: ["PyTorch", "Reinforcement Learning", "Autonomous Vehicles"],
  },
  {
    title: "Generating News Headlines with Recurrent Neural Networks",
    venue: "IJARESM · Vol 10, Issue 3 · March 2022",
    description:
      "NLP research using encoder-decoder RNNs with LSTM units and attention mechanisms for automated news headline generation and text summarization.",
    link: "https://www.ijaresm.com/generating-news-headlines-with-recurrent-neural-networks",
    tags: ["NLP", "LSTM", "Attention", "Text Summarization"],
  },
];

export const education = [
  {
    school: "Saint Louis University",
    degree: "M.S. Information Systems",
    period: "May 2025",
    location: "St. Louis, MO",
    detail: "GPA 3.75",
  },
  {
    school: "Guru Nanak Institutions Technical Campus",
    degree: "B.Tech, Electronics & Communication Engineering",
    period: "May 2021",
    location: "Hyderabad, India",
    detail: "",
  },
];

export const socials = [
  { name: "GitHub", icon: FaGithub, url: personal.github },
  { name: "LinkedIn", icon: FaLinkedin, url: personal.linkedin },
  { name: "Instagram", icon: FaInstagram, url: personal.instagram },
];

export const marqueeTech = [
  "React Native", "TurboModules", "Fabric", "Swift", "Kotlin", "TypeScript", "Next.js", "Node.js", "FastAPI",
  "TensorFlow Lite", "LangChain", "RAG", "Azure OpenAI", "PostgreSQL", "MongoDB", "Redis", "GraphQL",
  "Fastlane", "GCP", "AWS", "Docker", "GitHub Actions",
];
