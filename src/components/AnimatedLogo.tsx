"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

const AnimatedLogo = ({ size = 40, className = "" }: AnimatedLogoProps) => {
  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  const fillVariants = {
    hidden: {
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      fill: "rgba(var(--primary), 1)",
      transition: {
        delay: 1.5,
        duration: 1,
      },
    },
  };

  return (
    <div className={className}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        initial="hidden"
        animate="visible"
      >
        {/* R letter stylized */}
        <motion.path
          d="M20 20 L20 80 L35 80 L35 55 L50 55 C60 55 70 45 70 35 C70 25 60 20 50 20 L20 20 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          variants={pathVariants}
          custom={0}
          fill="transparent"
        />
        <motion.path
          d="M35 55 L60 80"
          stroke="hsl(var(--primary))"
          strokeWidth="4"
          variants={pathVariants}
          custom={1}
          fill="transparent"
        />
        <motion.path
          d="M35 35 L50 35 C55 35 55 40 50 40 L35 40 Z"
          stroke="hsl(var(--primary))"
          strokeWidth="0"
          variants={fillVariants}
          fill="transparent"
        />

        {/* Lightning bolt */}
        <motion.path
          d="M75 20 L60 50 L70 50 L55 80 L65 50 L55 50 L70 20 Z"
          stroke="hsl(var(--accent))"
          strokeWidth="4"
          variants={pathVariants}
          custom={2}
          className="animate-pulse-slow"
          fill="transparent"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedLogo;
