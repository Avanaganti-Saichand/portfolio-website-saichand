"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import Link from "next/link";

interface ProjectCardProps extends Project {
  isHovered: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon: Icon,
  technologies,
  githubLink,
  liveLink,
  isHovered,
}) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => {
      if (isClicked) setIsClicked(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isClicked]);

  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsClicked(true);
  };

  const CardContent = (
    <motion.div
      className="relative p-6 rounded-xl bg-card text-card-foreground transition-all duration-300 cursor-pointer h-[400px] flex flex-col border border-border hover:border-primary w-full max-w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleCardClick}
    >
      {/* Border effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border-2 border-primary pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered || isClicked ? 1 : 0,
          scale: isHovered || isClicked ? [1, 1.02, 1] : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />

      {/* Content */}
      <Icon className="text-4xl mb-4 text-primary" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="overflow-y-auto flex-grow mb-4 text-sm text-muted-foreground">
        <p>{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-muted text-muted-foreground px-2 py-1 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Hover Buttons if liveLink exists */}
      {isHovered && liveLink && (
        <motion.div
          className="absolute inset-0 bg-background/90 backdrop-blur-sm flex flex-col items-center justify-center gap-3 rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-background font-semibold px-4 py-2 rounded hover:scale-105 transition"
          >
            View Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary text-primary font-semibold px-4 py-2 rounded hover:scale-105 transition"
          >
            View Source Code
          </a>
        </motion.div>
      )}
    </motion.div>
  );

  // Wrap in <a> if no liveLink so entire card becomes clickable
  return !liveLink ? (
    <a href={githubLink} target="_blank" rel="noopener noreferrer">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

export default ProjectCard;
