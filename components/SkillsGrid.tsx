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
} from "react-icons/fa";

const SkillsGrid = () => {
  const skills = useMemo(
    () => [
      { icon: <FaReact />, name: "React" },

      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <FaJs />, name: "JavaScript / TypeScript" },
      { icon: <FaDatabase />, name: "PostgreSQL" },
      { icon: <FaCode />, name: "WebSockets" },
      { icon: <FaGithub />, name: "GitHub / Git" },

      { icon: <FaPython />, name: "Python" },
      { icon: <FaReact />, name: "React Native" },

      { icon: <FaChartBar />, name: "Firebase / AWS" },
      { icon: <FaCode />, name: "Socket.IO" },
      { icon: <FaChartBar />, name: "MongoDB" },
      { icon: <FaChartBar />, name: "Express.js" },
      { icon: <FaCode />, name: "REST APIs" },
      { icon: <FaCode />, name: "JWT Auth" },
      { icon: <FaCode />, name: "Redux Toolkit" },
      { icon: <FaChartBar />, name: "Expo" },
      { icon: <FaCode />, name: "Tailwind CSS" },
      { icon: <FaCode />, name: "React Native Paper" },
      { icon: <FaCode />, name: "Reanimated 2" },
      { icon: <FaCode />, name: "ShadCN-style UI" },
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
