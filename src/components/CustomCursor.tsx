"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  variant?: "default" | "fire" | "lightning" | "magic";
}

const CustomCursor = ({ variant = "default" }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      const computedStyle = window.getComputedStyle(target);
      setIsPointer(computedStyle.cursor === "pointer");
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  const getCursorContent = () => {
    switch (variant) {
      case "fire":
        return (
          <>
            {/* Original cursor */}
            <div className="w-3 h-3 bg-orange-500 rounded-full z-10" />
            
            {/* Fire effect underneath */}
            <motion.div 
              className="absolute top-4 left-1/2 -translate-x-1/2"
              initial={{ scale: 0.8, y: 0 }}
              animate={{ 
                scale: isPointer ? 1.5 : 1,
                y: isPointer ? 8 : 4
              }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              <div className="relative">
                {/* Main fire core */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-yellow-400 to-orange-600 blur-[2px] animate-fire-core" />
                
                {/* Flames */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                  <motion.div
                    key={angle}
                    className="absolute w-3 h-6 bg-gradient-to-b from-yellow-300 to-red-600 rounded-full opacity-80"
                    style={{
                      left: '50%',
                      bottom: '100%',
                      transformOrigin: 'bottom center',
                      transform: `translateX(-50%) rotate(${angle}deg) translateY(-5px)`,
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    }}
                    animate={{
                      height: [6, 8, 6, 7, 6],
                      opacity: [0.8, 1, 0.7, 0.9, 0.8],
                    }}
                    transition={{
                      duration: 0.5 + Math.random(),
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
                
                {/* Fire glow */}
                <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-fire-glow" />
              </div>
            </motion.div>
            
            {/* Click explosion effect */}
            {isClicking && (
              <>
                {/* Original click effect */}
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-orange-500 rounded-full z-0"
                />
                
                {/* Enhanced fire explosion */}
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-b from-yellow-300 to-red-600 rounded-full blur-[1px]"
                />
                
                {/* Fire sparks */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full z-0"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: Math.cos((i * 30 * Math.PI) / 180) * (10 + Math.random() * 10),
                      y: Math.sin((i * 30 * Math.PI) / 180) * (10 + Math.random() * 10) - 5,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </>
            )}
            
            {/* Small fire particles */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                initial={{
                  x: Math.cos((i * 90 * Math.PI) / 180) * 3,
                  y: 5 + Math.sin((i * 90 * Math.PI) / 180) * 3,
                  opacity: 0,
                }}
                animate={{
                  y: -10,
                  x: Math.cos((i * 90 * Math.PI) / 180) * 5,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </>
        );
      case "lightning":
        return (
          <>
            <div className="absolute inset-0 bg-blue-500/30 rounded-full animate-lightning shadow-lightning" />
            <div className="w-3 h-3 bg-blue-400 rounded-full" />
            {isClicking && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-blue-400 rounded-full"
              />
            )}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-300 rotate-45 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-0.5 bg-blue-300 -rotate-45 animate-pulse" />
          </>
        );
      case "magic":
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-70 animate-rotate-slow" />
            <div className="w-3 h-3 bg-white rounded-full" />
            {isClicking && (
              <>
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 3, opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"
                />
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    initial={{
                      x: 0,
                      y: 0,
                      opacity: 1,
                    }}
                    animate={{
                      x: Math.cos((i * 45 * Math.PI) / 180) * 20,
                      y: Math.sin((i * 45 * Math.PI) / 180) * 20,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </>
            )}
            <div className="absolute -top-2 -left-2 w-1 h-1 bg-purple-300 rounded-full animate-bounce-slight" />
            <div
              className="absolute -top-2 -right-2 w-1 h-1 bg-pink-300 rounded-full animate-bounce-slight"
              style={{ animationDelay: "0.1s" }}
            />
            <div
              className="absolute -bottom-2 -left-2 w-1 h-1 bg-red-300 rounded-full animate-bounce-slight"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="absolute -bottom-2 -right-2 w-1 h-1 bg-yellow-300 rounded-full animate-bounce-slight"
              style={{ animationDelay: "0.3s" }}
            />
          </>
        );
      default:
        return (
          <>
            <div className="w-3 h-3 bg-primary rounded-full" />
            {isClicking && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-primary rounded-full"
              />
            )}
          </>
        );
    }
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        left: position.x,
        top: position.y,
        width: isPointer ? "40px" : "20px",
        height: isPointer ? "40px" : "20px",
      }}
      animate={{
        x: position.x - (isPointer ? 20 : 10),
        y: position.y - (isPointer ? 20 : 10),
        opacity: isHidden ? 0 : 1,
        scale: isPointer ? 1.2 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {getCursorContent()}
    </motion.div>
  );
};

export default CustomCursor;
