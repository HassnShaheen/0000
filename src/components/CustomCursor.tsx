"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  variant?: "default";
}

const CustomCursor = ({ variant = "default" }: CustomCursorProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

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

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] flex items-center justify-center"
      style={{
        width: isPointer ? "40px" : "20px",
        height: isPointer ? "40px" : "20px",
      }}
      animate={{
        x: position.x - (isPointer ? 20 : 10), // يظبط موقعه تحت الماوس
        y: position.y - (isPointer ? 20 : 10),
        opacity: isHidden ? 0 : 1,
        scale: isPointer ? 1.2 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {/* شكل الماوس القديم */}
      <div className="w-3 h-3 bg-primary rounded-full" />
      {isClicking && (
        <motion.div
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-primary rounded-full"
        />
      )}
    </motion.div>
  );
};

export default CustomCursor;
