import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TrailingLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-16 h-16 bg-[#F4DFC8] rounded-full opacity-20 pointer-events-none blur-xl"
      animate={{
        x: position.x - 32,
        y: position.y - 32,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0.1,
      }}
    />
  );
};

export default TrailingLight;
