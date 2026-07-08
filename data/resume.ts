export const personal = {
  name: "Saichand Avanaganti",
  role: "Senior Software Engineer",
  headline: "Building mobile products, AI workflows, and scalable full-stack systems.",
  subtitle:
    "I design and ship React Native, Next.js, backend, and AI-powered products from idea to production.",
  email: "saichand.avanaganti@outlook.com",
  location: "USA · Remote",
  github: "https://github.com/Avanaganti-Saichand",
  linkedin: "https://www.linkedin.com/in/saichand-avanaganti-1b51401a4/",
  resume: "/Saichand_Avanaganti_Resume.docx",
  summary:
    "Senior software engineer specializing in full-stack mobile and web applications — enterprise React Native on the New Architecture, Swift/Kotlin native modules for on-device ML, Next.js frontends, and AI-powered backend services. I own features end-to-end: API design, UI, performance, and CI/CD.",
};

export type Mode = "recruiter" | "engineer" | "product";

export const modes: { id: Mode; label: string; blurb: string }[] = [
  {
    id: "recruiter",
    label: "Recruiter Mode",
    blurb: "Quick summary, quantified experience, skills, and resume — the 90-second read.",
  },
  {
    id: "engineer",
    label: "Engineer Mode",
    blurb: "Architecture, native bridges, system design, and code-level project detail.",
  },
  {
    id: "product",
    label: "Product Mode",
    blurb: "Problems solved, user impact, and business outcomes per shipped product.",
  },
];

export const metrics = [
  { value: "5+", label: "Production-grade projects", sub: "shipped end-to-end" },
  { value: "3", label: "Mobile ecosystems", sub: "iOS · Android · React Native" },
  { value: "40%", label: "Release-cycle improvement", sub: "Fastlane + GCP Cloud Build" },
  { value: "25%", label: "Render optimization", sub: "fewer unnecessary re-renders" },
  { value: "AI+", label: "Full product surface", sub: "mobile · backend · applied AI" },
];

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
  tech: string[];
}

export const experience: Experience[] = [
  {
    company: "Maloka Labs",
    role: "Software Engineer",
    period: "Jul 2025 — Present",
    location: "Remote, USA",
    summary:
      "Enterprise React Native on the New Architecture, plus AI-powered services behind mobile and web clients.",
    achievements: [
      "Cut average query latency 40% with Swift/Kotlin TurboModules running TensorFlow Lite on-device via JSI.",
      "Reduced release cycle time 40% owning Fastlane + GCP Cloud Build automation through store submission.",
      "Shipped RAG microservices (FastAPI, LangChain, LlamaIndex, Azure OpenAI) powering document search.",
    ],
    tech: ["React Native", "TurboModules", "Swift", "Kotlin", "Next.js", "FastAPI", "LangChain", "GCP"],
  },
  {
    company: "BreatheIT",
    role: "Senior Mobile Developer",
    period: "Jun 2024 — May 2025",
    location: "Remote, USA",
    summary:
      "Converted a FlutterFlow web app into the company's first production mobile product, shipped to both stores.",
    achievements: [
      "Launched Ultopia on App Store & Google Play at a consistent 60fps with Reanimated 2 + Gesture Handler.",
      "Cut unnecessary re-renders 25% integrating LLM recommendations with memoized selectors and Suspense.",
      "Built Swift (AVFoundation, Keychain) and Kotlin (Camera2, Keystore) modules behind one TypeScript contract.",
    ],
    tech: ["React Native", "Swift", "Kotlin", "Reanimated 2", "Redux Toolkit", "LLM APIs"],
  },
  {
    company: "Real Variable",
    role: "Systems Analyst",
    period: "Sep 2020 — Jun 2023",
    location: "Hyderabad, India",
    summary:
      "Designed and implemented Realware & Realreco, retail logistics apps used by enterprise clients.",
    achievements: [
      "Reduced manual data processing 35% with spaCy + Hugging Face NLP pipelines for entity extraction.",
      "Brought key API responses under 200ms via PostgreSQL/MongoDB indexing and query restructuring.",
      "Improved forecast accuracy with scikit-learn / TensorFlow supply-chain models across client datasets.",
    ],
    tech: ["React Native", "AsyncStorage", "spaCy", "Transformers", "PostgreSQL", "MongoDB"],
  },
  {
    company: "Adobe",
    role: "Software Development Intern",
    period: "May — Jul 2019",
    location: "Hyderabad, India",
    summary:
      "IoT sensor-data ingestion pipelines for Internet-of-Vehicles prototypes on AWS; React contributions to internal UI tooling.",
    achievements: [
      "Processed real-time structured streams into PostgreSQL, enabling downstream analytics.",
      "Streamlined the internal component library with reusable React components.",
    ],
    tech: ["AWS", "PostgreSQL", "React", "Docker"],
  },
];

export interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  role: string;
  architecture: string;
  impact: string;
  business: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "ultopia",
    name: "Ultopia",
    tagline: "Production React Native app with camera capture, secure storage, and LLM recommendations at 60fps.",
    problem:
      "The company had a FlutterFlow web product but no mobile presence — and mobile was where its users lived.",
    role: "Senior Mobile Developer — owned the full conversion, native modules, and store launches.",
    architecture:
      "React Native UI over Swift (AVFoundation capture, Keychain) and Kotlin (Camera2, Keystore) modules exposed through a single TypeScript-typed contract; Reanimated 2 transitions; LLM recommendations behind Suspense boundaries with memoized Redux selectors.",
    impact: "Consistent 60fps on both platforms; re-renders down 25% on high-traffic screens.",
    business: "Enabled the company's first mobile launch — App Store and Google Play from one codebase.",
    tech: ["React Native", "Swift", "Kotlin", "TypeScript", "Reanimated 2", "LLM APIs"],
    featured: true,
    accent: "#22d3ee",
  },
  {
    id: "shift-scheduler",
    name: "Shift Scheduler",
    tagline: "Field-operations mobile app with GPS tracking, BLE hardware pairing, and real-time workflows.",
    problem:
      "Field teams needed verified on-site check-ins and live scheduling on unreliable networks and mixed hardware.",
    role: "Full-stack mobile engineer — app, native BLE bridges, backend, and CI/CD.",
    architecture:
      "Mapbox GPS with platform-specific permission flows; custom Swift/Kotlin BLE modules pairing to scanning hardware; PostgreSQL/MySQL on GCP with Kubernetes and connection pooling; Fastlane + Cloud Build release automation.",
    impact: "Sub-100ms API responses under concurrent multi-tenant load; weekly releases, cycle time down 40%.",
    business: "Verified shift check-ins replaced manual processes for field operations teams.",
    tech: ["React Native", "Mapbox", "BLE", "PostgreSQL", "GCP", "Kubernetes", "Fastlane"],
    github: "https://github.com/Avanaganti-Saichand/ShiftSchedulerApp",
    accent: "#3b82f6",
  },
  {
    id: "ai-decision-support",
    name: "AI Decision Support",
    tagline: "Multi-tenant AI platform serving LLM-powered recommendations to web and mobile clients.",
    problem:
      "Teams needed contextual AI recommendations inside their workflow — securely, per-tenant, on mobile-friendly payloads.",
    role: "Backend-focused engineer — auth, API design, and AI integration to the mobile UI.",
    architecture:
      "Django with OAuth 2.0 + JWT lifecycle (refresh rotation, expiry enforcement); RBAC and rate-limiting middleware; LLM inference endpoints shaped into lightweight mobile contracts consumed by React Native.",
    impact: "End-to-end LLM-to-mobile pattern delivered as a production-oriented reference implementation.",
    business: "Secure multi-tenant access model let one platform serve multiple client organizations.",
    tech: ["Python", "Django", "OAuth 2.0", "JWT", "RBAC", "LLM APIs", "React Native"],
    github: "https://github.com/Avanaganti-Saichand/AI-Driven-Decision-Support",
    accent: "#8b5cf6",
  },
  {
    id: "realware",
    name: "Realware & Realreco",
    tagline: "Retail logistics and operations suite with offline-first sync for enterprise clients.",
    problem:
      "Enterprise retail teams managed orders, inventory, and supply chain over low-bandwidth field connections.",
    role: "Systems analyst — analysis, design, implementation, and the NLP/data layer.",
    architecture:
      "Offline-first AsyncStorage sync with deep-link routing; spaCy + Transformers NLP pipelines for entity extraction and document classification; optimized PostgreSQL/MongoDB access paths.",
    impact: "Manual data processing down 35%; key API responses under 200ms on low-bandwidth connections.",
    business: "Reliable field operations for enterprise clients regardless of connectivity.",
    tech: ["React Native", "AsyncStorage", "spaCy", "Transformers", "PostgreSQL", "MongoDB"],
    accent: "#34d399",
  },
  {
    id: "tech-home",
    name: "Tech Home Electric",
    tagline: "Next.js PWA with a 94 Lighthouse mobile score, live in production.",
    problem: "A local services business needed a fast, discoverable, mobile-first web presence.",
    role: "Solo builder — design, build, deploy, and performance tuning.",
    architecture:
      "Next.js SSR + SSG with SWR stale-while-revalidate caching, deployed on Vercel's edge network.",
    impact: "94 Lighthouse mobile score; TTFB under 120ms; Core Web Vitals 'Good' across all metrics.",
    business: "Repeat-visit engagement up 30% on mobile devices.",
    tech: ["Next.js", "TypeScript", "PWA", "SWR", "Vercel"],
    live: "https://techhomeelectric.in/",
    accent: "#f59e0b",
  },
];

export const skillCategories = [
  {
    title: "Mobile",
    accent: "#22d3ee",
    skills: ["React Native", "TurboModules / Fabric", "Hermes", "Swift", "Objective-C", "Kotlin", "Java", "Reanimated 2/3", "Expo", "APNs / FCM", "CodePush"],
  },
  {
    title: "Frontend",
    accent: "#3b82f6",
    skills: ["React", "Next.js (SSR · ISR · App Router)", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend",
    accent: "#8b5cf6",
    skills: ["Node.js", "Python", "FastAPI", "Django", "GraphQL", "REST", "WebSockets", "OAuth 2.0 / JWT"],
  },
  {
    title: "AI / ML",
    accent: "#f472b6",
    skills: ["LangChain", "LangGraph", "LlamaIndex", "RAG Pipelines", "Azure OpenAI", "TensorFlow Lite", "Hugging Face", "spaCy", "scikit-learn", "Vector Search"],
  },
  {
    title: "Data",
    accent: "#34d399",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "MySQL", "SQLite", "ETL Pipelines", "SQL Optimisation"],
  },
  {
    title: "DevOps",
    accent: "#f59e0b",
    skills: ["AWS", "GCP", "Azure", "Docker", "GitHub Actions", "Fastlane", "Bitrise", "GCP Cloud Build", "Vercel"],
  },
];

export const marqueeTech = [
  "React Native", "Next.js", "TypeScript", "Swift", "Kotlin", "FastAPI", "Django",
  "Azure OpenAI", "LangChain", "PostgreSQL", "MongoDB", "Docker", "AWS", "GCP", "Vercel",
  "TensorFlow Lite", "GraphQL", "Fastlane", "Redis", "Kubernetes",
];

export const publications = [
  {
    title: "Simulation of Self-Driven Car on PyTorch Platform",
    venue: "IJARESM · March 2022",
    summary: "Reinforcement-learning navigation in a PyTorch self-driving simulation environment.",
    link: "https://www.ijaresm.com/simulation-of-self-driven-car-on-pytorch-platform",
  },
  {
    title: "Generating News Headlines with Recurrent Neural Networks",
    venue: "IJARESM · March 2022",
    summary: "Encoder-decoder RNNs with LSTM and attention for automated headline generation.",
    link: "https://www.ijaresm.com/generating-news-headlines-with-recurrent-neural-networks",
  },
];

export const education = [
  { school: "Saint Louis University", degree: "M.S. Information Systems", period: "2025", detail: "GPA 3.75 · St. Louis, MO" },
  { school: "Guru Nanak Institutions", degree: "B.Tech, Electronics & Communication", period: "2021", detail: "Hyderabad, India" },
];
