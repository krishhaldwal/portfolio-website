import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

const LiveCodeSnippets = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const secondCodeControls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.5;
      if (window.scrollY > triggerPoint) {
        secondCodeControls.start({ x: 0, opacity: 1 });
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [secondCodeControls]);

  return (
    <>
      {/* First Code Preview (Right Slide-in on Load) */}
      <motion.div
        className="fixed right-4 top-1/3 w-64 sm:w-80 bg-black border border-gray-800 rounded-lg shadow-lg p-3"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-[#F4DFC8] text-sm sm:text-base font-bold mb-2"></h3>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="rounded-lg text-xs sm:text-sm overflow-hidden"
          customStyle={{ whiteSpace: "pre-wrap", overflowX: "hidden", wordBreak: "break-word" }}
        >
          {`console.log("welcome to my Page!");`}
        </SyntaxHighlighter>
      </motion.div>

      {/* Second Code Preview (Left Slide-in on Scroll, Smaller & Higher) */}
      <motion.div
        className="fixed left-4 top-1/2 w-52 sm:w-64 bg-black border border-gray-800 rounded-lg shadow-lg p-3"
        initial={{ x: -100, opacity: 0 }}
        animate={secondCodeControls}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-[#F4DFC8] text-xs sm:text-sm font-bold mb-2"></h3>
        <SyntaxHighlighter
          language="javascript"
          style={dracula}
          className="rounded-lg text-xs sm:text-sm overflow-hidden"
          customStyle={{ whiteSpace: "pre-wrap", overflowX: "hidden", wordBreak: "break-word" }}
        >
          {`const user = {
  name: "Krish",
  role: "Full Stack Dev"
};`}
        </SyntaxHighlighter>
      </motion.div>
    </>
  );
};

export default LiveCodeSnippets;
