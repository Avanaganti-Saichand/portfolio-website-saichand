"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const StyledPic: React.FC = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleInteraction = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px] cursor-pointer"
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
    >
      {/* Background ring animation */}
      <motion.div
        className="absolute inset-0 border-4 border-primary rounded-full z-0"
        animate={
          isAnimating ? { scale: [1, 1.05, 1], rotate: [0, 3, -3, 0] } : {}
        }
        transition={{ duration: 0.5 }}
      />

      {/* Image wrapper */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden bg-primary z-10"
        animate={
          isAnimating ? { scale: [1, 1.03, 1], rotate: [0, -2, 2, 0] } : {}
        }
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/pics/photo.png"
          alt="Saichand"
          fill
          className="object-cover rounded-full"
        />
        {/* Overlay flash effect */}
        <motion.div
          className="absolute inset-0 bg-primary opacity-0 rounded-full"
          animate={{ opacity: isAnimating ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
};

export default StyledPic;
