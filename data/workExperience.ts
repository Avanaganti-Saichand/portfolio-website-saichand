import {
  FaMobileAlt,
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaCloud,
  FaBolt,
  FaChalkboardTeacher,
  FaBriefcase,
  FaChartBar,
  FaCode,
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
    company: "Maloka Labs",
    position: "Mobile & Web Engineer",
    duration: "Dec 2025 – Present",
    year: 2025,
    description: [
      "Developed FastAPI backend services powering a Generative AI automation platform (LangChain + LlamaIndex), with REST APIs versioned and shaped specifically for consumption by React Native mobile clients and Next.js web surfaces.",
      "Built Azure OpenAI vector search pipelines for semantic document retrieval, reducing average query response time by 40%; integrated results into a React Native mobile interface via paginated, gzip-compressed API responses optimized for cellular data usage.",
      "Evaluated TensorFlow Lite model deployment for on-device inference in React Native, writing a native Kotlin bridge module (Android) and a Swift/Objective-C bridge module (iOS) to expose TFLite inference results to the JavaScript layer without a server round-trip.",
      "Containerized backend services with Docker and deployed on Azure and GCP; maintained stable API contracts across React Native, Flutter (prototype), and web clients simultaneously.",
      "Collaborated with frontend teams on API schema design and integration testing, reducing back-and-forth during mobile feature integration sprints.",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "FastAPI", icon: FaNodeJs },
      { name: "Azure OpenAI", icon: FaCloud },
      { name: "TensorFlow Lite", icon: FaBolt },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Breathe IT",
    position: "Mobile Software Engineer",
    duration: "Sep 2024 – May 2025",
    year: 2024,
    description: [
      "Built and maintained React Native features for an enterprise risk-intelligence mobile application targeting iOS and Android, integrating FastAPI-backed LLM claim-matching APIs to surface intelligent recommendations directly in the mobile UI.",
      "Wrote native bridge modules in Kotlin (Android) and Swift (iOS) to access platform-level device capabilities — including camera integration for document capture and secure local storage — that were not available through standard React Native libraries at the time.",
      "Managed asynchronous state with Redux Toolkit and Context API, keeping the UI responsive and consistent across variable network conditions typical in field-use environments; implemented optimistic updates with rollback on API failure.",
      "Prototyped a parallel Flutter/Dart implementation of two core screens to evaluate feasibility of a future platform migration; delivered a functional proof-of-concept using Flutter's BLoC pattern for state management.",
      "Integrated embedding-based search API results into the mobile interface with sub-300ms perceived response time; collaborated with backend on response payload shaping to reduce mobile data consumption on cellular networks.",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: FaMobileAlt },
      { name: "FastAPI", icon: FaNodeJs },
      { name: "Redux Toolkit", icon: FaLaptopCode },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Real Variable",
    position: "Software Developer",
    duration: "Aug 2021 – Jun 2023",
    year: 2021,
    description: [
      "Built and maintained REST APIs using Flask and FastAPI, handling data ingestion, transformation, and delivery to frontend and mobile clients; optimized slow queries with indexing and caching to bring response times down to under 200ms on key endpoints.",
      "Developed NLP processing pipelines using spaCy and Hugging Face Transformers for text classification and named-entity extraction tasks, reducing manual data tagging effort by approximately 35% on client projects.",
      "Collaborated with frontend developers to agree on API contracts up front — documenting request/response formats in shared specs that reduced back-and-forth during integration testing.",
      "Trained and evaluated ML models (scikit-learn, TensorFlow 2.x) using cross-validation and hyperparameter tuning, iterating on model quality across multiple client use cases with varying data distributions.",
    ],
    skills: [
      { name: "Flask", icon: FaNodeJs },
      { name: "FastAPI", icon: FaNodeJs },
      { name: "spaCy", icon: FaLaptopCode },
      { name: "scikit-learn", icon: FaChartBar },
    ],
    logo: "/logos/real-variable.jpeg",
  },
  {
    company: "Globalastrix Techno Solutions",
    position: "Software Engineer",
    duration: "Sep 2018 – Aug 2021",
    year: 2018,
    description: [
      "Built cross-platform mobile features in React Native (v0.60–0.64) with TypeScript for iOS and Android; migrated class-based components to functional components with React Hooks after v0.59, cutting boilerplate significantly across the shared codebase.",
      "Wrote custom native modules in Java/Kotlin (Android) and Objective-C/Swift (iOS) to expose Bluetooth Low Energy (BLE) scanning, device pairing, and GATT service communication to the React Native JavaScript layer — enabling hardware device integration that the standard RN library ecosystem did not cover at the time.",
      "Integrated native camera modules via Swift (iOS) and Kotlin (Android) for in-app document capture and image processing features, handling permission flows, preview rendering, and image compression within the native bridge layer before passing results back to the JS thread.",
      "Implemented GPS/location services and Mapbox SDK integration for a location-aware feature set, managing foreground and background location permission handling across both Android and iOS platform-specific APIs.",
      "Managed application state with Redux and Redux Thunk for async API side effects; organized reducers into feature-based modules and debugged JS thread performance issues using React Native Debugger and Android Studio's profiler.",
      "Built and maintained SQL Server backend services for real-time data operations, working in Android Studio and Xcode daily to test, profile, and resolve platform-specific build and runtime issues across the release cycle.",
    ],
    skills: [
      { name: "React Native", icon: FaReact },
      { name: "Swift", icon: FaMobileAlt },
      { name: "Kotlin", icon: FaMobileAlt },
      { name: "SQL Server", icon: SiPostgresql },
    ],
    logo: "/logos/freelance.png",
  },
  {
    company: "Ridhan Technologies / Adobe",
    position: "Software Engineering Intern",
    duration: "May 2019 – Aug 2019",
    year: 2019,
    description: [
      "Built React 16 frontend components using functional components and class components (Hooks not yet mainstream), with Redux for state management — gaining hands-on experience with the unidirectional data flow pattern used across the team's codebase.",
      "Wrote unit and integration tests using Jest and Enzyme, reaching over 80% code coverage on assigned components and learning to write tests alongside feature code rather than as an afterthought.",
      "At Adobe, contributed to an IoT/Internet-of-Vehicles prototype, working with real-time data streams and getting early exposure to event-driven data handling patterns.",
    ],
    skills: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: FaLaptopCode },
      { name: "Jest", icon: FaCode },
      { name: "IoT", icon: FaBolt },
    ],
    logo: "/logos/ridhan.png",
  },
];