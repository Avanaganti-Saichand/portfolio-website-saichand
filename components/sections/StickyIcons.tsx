"use client";
import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";

interface IconLinkProps {
  icon: React.ElementType;
  href: string;
  label: string;
}

const StickyIcons: React.FC = () => {
  const lineControls = useAnimation();
  const contentControls = useAnimation();
  const isTabletOrLarger = useMediaQuery("(min-width: 600px)");

  const socialLinks: IconLinkProps[] = [
    {
      icon: FaGithub,
      href: "https://github.com/Avanaganti-Saichand",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/saichand-avanaganti-1b51401a4/",
      label: "LinkedIn",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/saichand_avanaganti/",
      label: "Instagram",
    },
  ];

  useEffect(() => {
    const animateElements = async () => {
      await lineControls.start({
        height: "30vh",
        transition: { duration: 1, ease: "easeOut" },
      });
      await contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    };

    if (isTabletOrLarger) {
      animateElements();
    }
  }, [lineControls, contentControls, isTabletOrLarger]);

  const IconLink: React.FC<IconLinkProps> = ({ icon: Icon, href, label }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative text-foreground hover:text-primary transition-colors duration-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={24} />
      <span className="absolute -right-28 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 bg-background border border-foreground text-xs text-foreground px-2 py-1 rounded shadow transition-opacity duration-300 whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  );

  if (!isTabletOrLarger) return null;

  return (
    <>
      <div className="fixed left-4 bottom-0 z-50 flex flex-col items-center">
        <motion.div
          className="flex flex-col gap-4 mt-4 pb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={contentControls}
        >
          {socialLinks.map((link, index) => (
            <IconLink key={index} {...link} />
          ))}
        </motion.div>
        <motion.div
          className="w-[2px] bg-primary"
          initial={{ height: 0 }}
          animate={lineControls}
          style={{ originY: 1 }}
        />
      </div>

      <div className="fixed right-4 bottom-0 z-50 flex flex-col items-center">
        <motion.div
          className="mt-4 writing-vertical-rl"
          initial={{ opacity: 0, y: 20 }}
          animate={contentControls}
        >
          <a
            href="mailto:saichand.avanaganti@slu.edu"
            className="text-foreground hover:text-primary transition-colors duration-200 pb-2"
          >
            saichand.avanaganti@slu.edu
          </a>
        </motion.div>
        <motion.div
          className="w-[2px] bg-primary"
          initial={{ height: 0 }}
          animate={lineControls}
          style={{ originY: 1 }}
        />
      </div>
    </>
  );
};

export default StickyIcons;
