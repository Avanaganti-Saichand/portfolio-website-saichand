// components/SkillsGrid.tsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaCode,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaMobileAlt,
  FaBolt,
  FaCloud,
} from "react-icons/fa";
import { SiPostgresql, SiMongodb } from "react-icons/si";

const SkillsGrid = () => {
  const skills = useMemo(
    () => [
      // Cross-Platform Mobile
      { icon: <FaReact />, name: "React Native" },
      { icon: <FaMobileAlt />, name: "Flutter / Dart" },
      { icon: <FaJs />, name: "TypeScript" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaCode />, name: "Redux Toolkit" },
      { icon: <FaCode />, name: "Context API" },
      { icon: <FaCode />, name: "GraphQL (Apollo)" },
      { icon: <FaCode />, name: "React Navigation" },
      { icon: <FaCode />, name: "AsyncStorage" },
      { icon: <FaCode />, name: "Push Notifications" },
      { icon: <FaCode />, name: "Offline-First Sync" },
      { icon: <FaCode />, name: "Expo" },
      { icon: <FaCode />, name: "Jest / Enzyme" },
      { icon: <FaCode />, name: "App Store Deployment" },
      { icon: <FaCode />, name: "Google Play Deployment" },
      { icon: <FaCode />, name: "Fastlane" },

      // Native Mobile (iOS & Android)
      { icon: <FaMobileAlt />, name: "Swift" },
      { icon: <FaMobileAlt />, name: "Objective-C" },
      { icon: <FaMobileAlt />, name: "Xcode" },
      { icon: <FaMobileAlt />, name: "iOS SDK" },
      { icon: <FaMobileAlt />, name: "SwiftUI" },
      { icon: <FaMobileAlt />, name: "Kotlin" },
      { icon: <FaMobileAlt />, name: "Java" },
      { icon: <FaMobileAlt />, name: "Android Studio" },
      { icon: <FaMobileAlt />, name: "Android SDK" },
      { icon: <FaMobileAlt />, name: "Jetpack Compose" },
      { icon: <FaCode />, name: "Native Module Bridging" },
      { icon: <FaBolt />, name: "BLE / Bluetooth LE" },
      { icon: <FaCode />, name: "Camera Integration" },
      { icon: <FaCode />, name: "GPS & Location" },
      { icon: <FaCode />, name: "Background Services" },
      { icon: <FaCode />, name: "Permissions Handling" },

      // Web & Full-Stack
      { icon: <FaReact />, name: "React.js" },
      { icon: <FaReact />, name: "Next.js" },
      { icon: <FaCode />, name: "Angular" },
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaCode />, name: "HTML/CSS" },
      { icon: <FaCode />, name: "REST API Design" },
      { icon: <FaNodeJs />, name: "FastAPI" },
      { icon: <FaNodeJs />, name: "Django" },
      { icon: <FaNodeJs />, name: "Flask" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiPostgresql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiPostgresql />, name: "SQL Server" },
      { icon: <FaCode />, name: "Redis" },
      { icon: <FaCode />, name: "WebSockets" },
      { icon: <FaCode />, name: "Docker" },
      { icon: <FaCloud />, name: "AWS" },
      { icon: <FaCloud />, name: "GCP" },
      { icon: <FaCloud />, name: "Azure" },
      { icon: <FaCloud />, name: "Firebase" },
      { icon: <FaCode />, name: "GitHub Actions" },
      { icon: <FaCode />, name: "GCP Cloud Build" },
      { icon: <FaGithub />, name: "Git" },
      { icon: <FaCode />, name: "Agile / Scrum" },

      // AI/ML Integration
      { icon: <FaCode />, name: "LangChain" },
      { icon: <FaCode />, name: "LlamaIndex" },
      { icon: <FaCode />, name: "RAG Pipeline" },
      { icon: <FaCode />, name: "LLM APIs (OpenAI)" },
      { icon: <FaCode />, name: "Azure OpenAI" },
      { icon: <FaCode />, name: "Vector Search" },
      { icon: <FaChartBar />, name: "TensorFlow" },
      { icon: <FaChartBar />, name: "TensorFlow Lite" },
      { icon: <FaChartBar />, name: "PyTorch" },
      { icon: <FaChartBar />, name: "scikit-learn" },
      { icon: <FaCode />, name: "spaCy" },
      { icon: <FaCode />, name: "NLP Pipelines" },
      { icon: <FaCode />, name: "Prompt Engineering" },
    ],
    []
  );

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="grid grid-cols-4 gap-2 sm:gap-4 mb-8 -mx-2 sm:mx-0"
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          custom={index}
          variants={skillVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          className="bg-card text-card-foreground rounded-lg p-2 sm:p-3 text-center flex flex-col items-center justify-center"
        >
          <div className="text-2xl sm:text-3xl mb-1 text-primary">
            {skill.icon}
          </div>
          <p className="text-xs sm:text-sm font-medium">{skill.name}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillsGrid;
