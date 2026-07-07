export const personal = {
  name: "Saichand Avanaganti",
  role: "Senior Software Engineer",
  tagline: "Mobile · Web · Applied AI",
  email: "saichand.avanaganti@outlook.com",
  location: "USA · Remote",
  github: "https://github.com/Avanaganti-Saichand",
  linkedin: "https://www.linkedin.com/in/saichand-avanaganti-1b51401a4/",
  summary:
    "I build full-stack mobile and web applications — enterprise React Native on the New Architecture, Swift and Kotlin native modules for on-device ML, Next.js frontends, and AI-powered backend services. I own features end-to-end: API design, UI, performance, and release automation.",
};

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tech: string;
}

export const experience: Experience[] = [
  {
    company: "Maloka Labs",
    role: "Software Engineer",
    period: "2025 — Present",
    location: "Remote, USA",
    summary:
      "Enterprise React Native on the New Architecture, plus AI-powered services behind mobile and web clients.",
    highlights: [
      "Swift & Kotlin TurboModules for on-device TensorFlow Lite inference — query latency down 40%.",
      "Node.js & FastAPI microservices with LangChain, LlamaIndex, and Azure OpenAI for document processing and vector search.",
      "Release automation with Fastlane + GCP Cloud Build — release cycle time down 40%.",
    ],
    tech: "React Native · TurboModules · Swift · Kotlin · Next.js · FastAPI · LangChain · GCP",
  },
  {
    company: "BreatheIT",
    role: "Senior Mobile Developer",
    period: "2024 — 2025",
    location: "Remote, USA",
    summary:
      "Converted a FlutterFlow web app into the company's first production mobile product, shipped to both stores.",
    highlights: [
      "Ultopia on App Store & Google Play — Reanimated 2 transitions at a consistent 60fps.",
      "Swift (AVFoundation, Keychain) and Kotlin (Camera2, Keystore) modules behind one TypeScript API contract.",
      "LLM-powered recommendations in the mobile UI — unnecessary re-renders down 25%.",
    ],
    tech: "React Native · Swift · Kotlin · Reanimated · Redux Toolkit",
  },
  {
    company: "Real Variable",
    role: "Systems Analyst",
    period: "2020 — 2023",
    location: "Hyderabad, India",
    summary:
      "Designed and implemented Realware & Realreco, retail logistics apps used by enterprise clients.",
    highlights: [
      "Offline-first AsyncStorage sync and deep-link routing for low-bandwidth field use.",
      "NLP pipelines with spaCy and Hugging Face Transformers — manual data processing down 35%.",
      "PostgreSQL & MongoDB optimisation — key API responses under 200ms.",
    ],
    tech: "React Native · spaCy · Transformers · PostgreSQL · MongoDB · scikit-learn",
  },
  {
    company: "Adobe",
    role: "Software Development Intern",
    period: "2019",
    location: "Hyderabad, India",
    summary:
      "IoT sensor-data ingestion pipelines for Internet-of-Vehicles prototypes on AWS; React contributions to internal UI tooling.",
    highlights: [],
    tech: "AWS · PostgreSQL · React · Docker",
  },
];

export interface Project {
  title: string;
  description: string;
  tech: string;
  link?: string;
  linkLabel?: string;
}

export const projects: Project[] = [
  {
    title: "Ultopia",
    description:
      "Production React Native app on the App Store and Google Play — camera document capture, secure credential storage, and LLM recommendations at 60fps.",
    tech: "React Native · Swift · Kotlin · TypeScript",
  },
  {
    title: "Shift Scheduler",
    description:
      "Field-operations app with Mapbox GPS tracking and BLE pairing to scanning hardware; GCP backend sustaining sub-100ms responses.",
    tech: "React Native · Mapbox · BLE · PostgreSQL · Kubernetes",
    link: "https://github.com/Avanaganti-Saichand/ShiftSchedulerApp",
    linkLabel: "github",
  },
  {
    title: "AI Decision Support",
    description:
      "Multi-tenant Django platform surfacing LLM recommendations to mobile clients through RBAC-secured, rate-limited APIs.",
    tech: "Django · OAuth 2.0 · JWT · LLM APIs",
    link: "https://github.com/Avanaganti-Saichand/AI-Driven-Decision-Support",
    linkLabel: "github",
  },
  {
    title: "Realware & Realreco",
    description:
      "Retail logistics suite for enterprise order, inventory, and supply-chain management with offline-first sync.",
    tech: "React Native · AsyncStorage · PostgreSQL",
  },
  {
    title: "Tech Home Electric",
    description:
      "Next.js PWA with a 94 Lighthouse mobile score and sub-120ms TTFB on Vercel's edge network.",
    tech: "Next.js · TypeScript · PWA · Vercel",
    link: "https://techhomeelectric.in/",
    linkLabel: "live",
  },
];

export const publications = [
  {
    title: "Simulation of Self-Driven Car on PyTorch Platform",
    venue: "IJARESM, March 2022",
    link: "https://www.ijaresm.com/simulation-of-self-driven-car-on-pytorch-platform",
  },
  {
    title: "Generating News Headlines with Recurrent Neural Networks",
    venue: "IJARESM, March 2022",
    link: "https://www.ijaresm.com/generating-news-headlines-with-recurrent-neural-networks",
  },
];

export const skills = [
  { title: "Mobile", items: "React Native (TurboModules, Fabric, Hermes), Swift, Objective-C, Kotlin, Java, Reanimated, Expo, APNs/FCM" },
  { title: "Frontend", items: "React, Next.js (SSR, ISR, App Router), TypeScript, Redux Toolkit, Tailwind CSS" },
  { title: "Backend", items: "Node.js, Python, FastAPI, Django, GraphQL, REST, WebSockets, OAuth 2.0" },
  { title: "Data", items: "PostgreSQL, MongoDB, Redis, Firebase, MySQL, SQLite, ETL pipelines" },
  { title: "AI / ML", items: "LangChain, LlamaIndex, RAG, Azure OpenAI, TensorFlow Lite, Hugging Face, spaCy, scikit-learn" },
  { title: "DevOps", items: "AWS, GCP, Azure, Docker, GitHub Actions, Fastlane, Bitrise, Vercel" },
];

export const education = [
  { school: "Saint Louis University", degree: "M.S. Information Systems", period: "2025", detail: "GPA 3.75" },
  { school: "Guru Nanak Institutions", degree: "B.Tech, Electronics & Communication", period: "2021", detail: "" },
];
