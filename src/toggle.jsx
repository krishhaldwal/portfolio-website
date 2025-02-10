import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const CapsuleNav = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  return (
    <div className="relative flex bg-[#252525] rounded-full px-2 py-2 shadow-lg border border-gray-600 w-48">
      {/* Moving Indicator */}
      <motion.div
        className="absolute top-1 bottom-1 w-[50%] bg-gray-500 rounded-full"
        initial={{ x: activeTab === "/work" ? "0%" : "100%" }}
        animate={{ x: activeTab === "/work" ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Work Button */}
      <Link
        to="/work"
        className={`relative flex-1 text-center py-2 text-white font-medium transition-all ${
          activeTab === "/work" ? "text-white" : "text-gray-300"
        }`}
        onClick={() => setActiveTab("/work")}
      >
        Work
      </Link>

      {/* Info Button */}
      <Link
        to="/info"
        className={`relative flex-1 text-center py-2 text-white font-medium transition-all ${
          activeTab === "/info" ? "text-white" : "text-gray-300"
        }`}
        onClick={() => setActiveTab("/info")}
      >
        Info
      </Link>
    </div>
  );
};

export default CapsuleNav;