import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const socialLinks = [
  { icon: <FaGithub />, url: "https://github.com/krishhaldwal" },
  { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourprofile" },
  { icon: <FaWhatsapp />, url: "https://wa.me/7011174382" },
  { icon: <FaEnvelope />, url: "mailto:akrishjee@email.com" },
];

const InteractiveSocialIcons = () => {
  return (
    <div  data-aos="fade-up"data-aos-duration="1500" className="fixed right-6 top-1/3 -translate-y-1/2 flex flex-col gap-4 text-[#F4DFC8]">
      {socialLinks.map((link, index) => (
        <motion.a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default InteractiveSocialIcons;
