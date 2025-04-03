"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  variant?: "default" | "fire" | "lightning" | "magic";
}

const CustomCursor = ({ variant = "fire" }: CustomCursorProps) => {
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

  const getCursorContent = () => {
    switch (variant) {
      case "fire":
        return (
          <>
            {/* لهب خارجي */}
            <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-br from-yellow-400 via-red-500 to-orange-600 opacity-50 blur-xl shadow-[0_0_30px_rgba(255,100,0,0.7)]" />

            {/* نواة اللهب */}
            <div className="w-4 h-4 bg-orange-500 rounded-full z-10 shadow-[0_0_20px_rgba(255,69,0,0.8)]" />

            {/* تأثير الضغط */}
            {isClicking && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-orange-400/50 rounded-full"
              />
            )}

            {/* شعلات نارية عشوائية حوالين المؤشر */}
            <div className="absolute -top-2 -left-1 w-1.5 h-1.5 bg-red-400 rounded-full animate-bounce-fast" />
            <div className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-yellow-400 rounded-full animate-bounce-slow" />
            <div className="absolute -top-2 -right-2 w-1 h-1 bg-orange-300 rounded-full animate-bounce" />
          </>
        );

      // باقي الحالات زي ما هي
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
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 3, opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full"
              />
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
        width: isPointer ? "40px" : "28px",
        height: isPointer ? "40px" : "28px",
      }}
      animate={{
        x: position.x - (isPointer ? 20 : 14),
        y: position.y - (isPointer ? 20 : 14),
        opacity: isHidden ? 0 : 1,
        scale: isPointer ? 1.3 : 1,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
    >
      {getCursorContent()}
    </motion.div>
  );
};

export default CustomCursor;
