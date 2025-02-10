import React from "react";
import { Link } from "react-router-dom";
import { FaDownload , FaGithub, FaLinkedin, FaArrowLeft, FaArrowRight,FaChevronLeft, FaChevronRight, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "tailwindcss/tailwind.css";
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




import MagneticEffect from "./components/MagneticEffect";
import TrailingLight from "./components/TrailingLight";

import DeveloperWisdomPopup from "./components/quotes";


const technologies = [
    { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
    { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
    { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
    { name: "React", icon: "https://skillicons.dev/icons?i=react" },
    { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
    { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
    { name: "C++", icon: "https://skillicons.dev/icons?i=cpp" },
    { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
    { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
    { name: "Postgre", icon: "https://skillicons.dev/icons?i=postgres" },
    { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
    { name: "Bootstrap", icon: "https://skillicons.dev/icons?i=bootstrap" },
    { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
    { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    { name: "ExpressJS", icon: "https://skillicons.dev/icons?i=expressjs" },
    { name: "NextJS", icon: "https://skillicons.dev/icons?i=nextjs" },
    { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
  ];

const Footer = () => {
    return (
      <footer className=" glow-text-strong w-full py-8 sm:py-12 bg-[#0000] border-t border-[#F4DFC8] text-[#FAF6F0] text-sm sm:text-lg flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12">
        {/* Left Side */}
        <div className="text-center sm:text-left">
          <div className="font-['comfortaa'] font-extrabold text-[#F4DFC8] text-lg sm:text-xl">Napchune
            
          </div>
          <p className="text-[#F4DFC8] font-['comfortaa'] text-sm sm:text-base mt-1">&copy; 2025 | All Rights Reserved</p>
        </div>
  
        {/* Center Links */}
        <div className="flex flex-wrap justify-center font-['comfortaa'] mr-12 font-bold gap-6 mt-4 sm:mt-0 text-[#ffffff] hover:text-[#FAF6F0]">
      
        </div>
  
        {/* Right Side Social Icons */}
        <div className="  flex gap-4 mt-4 sm:mt-0 text-[#F4DFC8]">
          <a href="https://github.com/krishhaldwal" target="_blank" rel="noopener noreferrer" className="hover:text-white glow-text-strong hover:scale-110 transition-transform text-2xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-transform text-2xl">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/7011175382" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:scale-110 transition-transform text-2xl">
            <FaWhatsapp />
          </a>
          <a href="mailto:akrishjee@email.com" className="hover:text-white hover:scale-110 transition-transform text-2xl glow-text-strong ">
            <FaEnvelope />  
          </a>
        </div>
      </footer>
    );
  };


const InfoPage = () => {

  const [showPopup, setShowPopup] = useState(false);
  const toolkitRef = useRef(null); // Ref for Technical Toolkit section

  useEffect(() => {
    const handleScroll = () => {
      if (toolkitRef.current) {
        const sectionTop = toolkitRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight * 0.8) {
          setShowPopup(true);
          setResumeOpen(true);
        } else {
          setShowPopup(false);
          setResumeOpen(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [leftOpen, setLeftOpen] = useState(false);
  const [rightPopupOpen, setRightPopupOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(true);

  
  

  useEffect(() => {
    setTimeout(() => {
      setLeftOpen(true);
      setRightPopupOpen(true);
    }, 600); // Delay to ensure smooth animation
  }, []);

  return (
    <div className="  min-h-screen bg-[#000000] text-white flex flex-col items-center relative font-sans px-4 sm:px-8 overflow-hidden">


      <TrailingLight />
      {showPopup && <DeveloperWisdomPopup />  } {/* Show popup when triggered */}
      

    {/* Left Pop-up */}
    <div  className={`absolute left-0 top-1/3 transform ${leftOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 bg-[#222] text-white p-4 rounded-r-lg shadow-lg w-40 h-32 flex items-center justify-between`}>
        <div>
          <h3 className="text-lg font-[comfortaa] font-bold mb-2">Coding Experience</h3>
          <p className="font-[comfortaa] text-sm">4+ Years</p>
        </div>
        <button onClick={() => setLeftOpen(!leftOpen)} className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#222] p-2 rounded-full shadow-md">
        {leftOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
        </button>
      </div>

      {/* Right Popup */}
      <div  className={`absolute right-0 top-60 transform ${rightPopupOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 bg-[#F4DFC8] text-black p-4 rounded-l-lg shadow-lg`}> 
        <button onClick={() => setRightPopupOpen(!rightPopupOpen)} className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#F4DFC8] p-2 rounded-full shadow-md">
          {rightPopupOpen ? <FaChevronRight size={20} /> : <FaChevronLeft size={20} />}
        </button>
        <h3 className="text-lg font-[comfortaa] font-bold mb-2">Problems Solved</h3>
        <p className="font-[comfortaa] text-sm">500+ DSA Problems</p>
      </div>

      {/* Resume popup */}
      { showPopup &&
    <div data-aos="fade-right"  className={`absolute left-0 top-2/3 transform ${resumeOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 bg-[#222] text-white p-4 rounded-r-lg shadow-lg w-40 h-32 flex items-center justify-between`}>
        <div>
        <h3 className="text-lg font-bold mb-2 text-[#F4DFC8]">Download Resume</h3>
      <a
        href="/resume.pdf"
        download
        className="flex items-center gap-2 bg-[#F4DFC8] text-black px-4 py-2 rounded-full text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300"
      >
        <FaDownload /> Resume
      </a>
        </div>
        
      </div>
  }




      {/* Navbar */}
      <nav  className="w-full flex flex-col sm:flex-row justify-between items-center p-6 text-lg relative gap-4 sm:gap-0">
      <div >
  
  <h1 data-aos="fade-down" className="font-['comfortaa'] font-black text-[white] text-2xl   glow-text">Krish</h1>
  <h6 data-aos="fade-down" className="text-xs font-thin text-gray-300 font-[comfortaa] glow-text">Full Stack Web Developer</h6>
  
</div>


        {/* Capsule Navigation Bar (Centered) */}
        <div className="  absolute left-1/2 top-6 transform -translate-x-1/2 bg-[#F4DFC8] border-[white] rounded-full px-6 py-3 flex items-center gap-6 shadow-lg">
          <Link to="/" className="px-3  text-[#000]  font-['comfortaa'] font-black text-xl  duration-300 hover:scale-110">
            Projects
          </Link>
          <div className="bg-[#000] rounded-full p-0.5 transition-all duration-300 hover:scale-125 animate-fade-in text-sm sm:text-lg border border-[]">    
            <Link className="    px-3  text-[#F4DFC8] text-xl font-['comfortaa'] font-black   duration-300 hover:scale-110">
            About Me
          </Link>
          </div>
          
        </div>

        {/* Top Right Buttons */}
        <div data-aos="fade-down" className=" font-[comfortaa] font-black flex glow-text-strong flex-wrap justify-center gap-4 sm:gap-6 mt-2 sm:mt-0">
          {[
            { name: "LeetCode ⭧", url: "https://leetcode.com/u/akrishjee/" },
            { name: "GFG ⭧", url: "https://www.geeksforgeeks.org/user/akrisocjr/" },
            { name: "GitHub ⭧", url: "https://github.com/krishhaldwal" },
            { name: "Resume ⭧", url: "https://yourblog.com" },
          ].map((btn, index) => (
            <MagneticEffect key={index}>
            <a
              key={index}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4DFC8]  text-sm sm:text-lg font-medium tracking-wide transition-all duration-300 hover:scale-110"
            >
              {btn.name}
            </a>
           </MagneticEffect>
          ))}
        </div>
      </nav>

      {/* Profile Section (With Image) */}
      <div data-aos="zoom-in" className="w-40 sm:w-60 h-44 sm:h-60 rounded-full overflow-hidden bg-[#393E46] mt-12 shadow-lg animate-fade-in">
        <img src="/images/pic5.jpeg" alt="Your Name" className="w-full h-full object-cover" />
      </div>

      {/* About Me Section */}
      <div data-aos="fade-up" className="flex flex-col items-center text-center max-w-3xl mt-8 px-4 sm:px-6 animate-fade-in">
        <h1 className=" text-[#F4DFC8] text-3xl sm:text-5xl font-[comfortaa] font-thin tracking-wider  opacity-90">Hi, i am <span className="text-[#F1D4E5]  font-['comfortaa'] font-black ">Krish </span></h1>
        <p className=" text-base sm:text-lg text-[#F4DFC8]  mt-6 leading-relaxed font-[comfortaa] font-thin">
          I am an Information Security student at <span className="font-black opacity-90">Netaji Subhas University of Technology</span>,
          specializing in Network and Information Security. With a deep-rooted passion for technology since childhood,
          I have been coding for over four years, continuously honing my skills and exploring the ever-evolving tech landscape.
          <br /><br />
          I have solved 500+ Data Structures and Algorithms problems and made various projects, strengthening my problem-solving abilities and logical thinking.
          The rapid advancements in technology fascinate me, and I am always eager to adapt, learn, and evolve with the industry.
          My goal is to leverage my expertise in cybersecurity and software development to build secure, scalable, and innovative solutions.
        </p>
      </div>

      {/* Skills / Technologies Section */}
      <div ref={toolkitRef} data-aos="fade-left" className="bg-[#000] rounded-full shadow-lg mt-12 p-6 sm:p-8 w-full max-w-2xl text-center opacity-90 animate-fade-in-slow mb-0">
  <h2 className="text-3xl sm:text-3xl font-[comfortaa] font-thin text-[#F4DFC8] pb-2 mb-4 tracking-wide">My Technical <span className="text-[#64CCC5] text-4xl font-['comfortaa'] font-black">Toolkit</span>  </h2>
  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
    {technologies.map((tech, index) => (
      <span key={index} className="flex items-center gap-3 bg-[#F4EAE0] text-[#191919] px-4 py-2 rounded-full text-sm sm:text-lg font-medium shadow-md hover:scale-125 transition-transform duration-300">
        <img src={tech.icon} alt={tech.name} className="w-6 h-6 sm:w-8 sm:h-8" />
        {tech.name}
      </span>
    ))}
  </div>
</div>

    {/* Connect With Me Section */}
<div data-aos="fade-right" className="bg-[#F4DFC8] rounded-full shadow-lg mt-12 p-6 sm:p-8 w-full max-w-2xl text-center opacity-90 animate-fade-in-slow mb-28">
  <h2 className="text-3xl sm:text-3xl font-[comfortaa] font-medium text-[#000] mb-4 tracking-wide">
    <span className="text-[#FF2626] text-4xl font-['comfortaa'] font-black">Connect</span> With Me
  </h2>
  <p className="text-[#000] text-sm font-[comfortaa] font-semibold sm:text-base mb-6">
    Feel free to reach out for collaboration, projects, or just to say hi!
  </p>

  <div className="flex justify-center gap-6">
    {[
      { name: "GitHub", url: "https://github.com/krishhaldwal", icon: "https://skillicons.dev/icons?i=github", hoverBg: "hover:bg-[#727D73]" },
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "https://skillicons.dev/icons?i=linkedin", hoverBg: "hover:bg-[#A6CDC6]" },
      { name: "Instagram", url: "https://www.instagram.com/napchune/", icon: "https://skillicons.dev/icons?i=instagram", hoverBg: "hover:bg-[#FFA09B]" },
      { name: "Email", url: "mailto:akrishjee@email.com", icon: "https://skillicons.dev/icons?i=gmail", hoverBg: "hover:bg-[#FB4141]" },
    ].map((platform, index) => (
      <a
        key={index}
        href={platform.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-none p-2 rounded-full shadow-md transition-transform transform hover:scale-110 duration-300 justify-center w-16 h-16 ${platform.hoverBg}`}
      >
        <img src={platform.icon} alt={platform.name} className="rounded-full" />
      </a>
    ))}
  </div>
</div>




      <Footer> </Footer>
    </div>
  );
};

export default InfoPage;
