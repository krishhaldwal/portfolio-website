import {React,useEffect, useState } from "react";
import { Link, useLocation,  } from "react-router-dom";
import "tailwindcss/tailwind.css";
import {FaChevronRight,FaChevronLeft , FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaWhatsapp } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";




import TrailingLight from "./components/TrailingLight";
import MagneticEffect from "./components/MagneticEffect";
import InteractiveSocialIcons from "./components/InteractiveSocialIcons";
import FirefliesEffect from "./components/FirefliesEffect";
import GuessLanguagePopup from "./components/guessP";




const Footer = () => {
    return (
      <footer className="relative z-50 glow-text-strong w-full py-8 sm:py-12 bg-[#0000] border-t border-[#F4DFC8] text-[#FAF6F0] text-sm sm:text-lg flex flex-col sm:flex-row justify-between items-center px-6 sm:px-12">
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
const WorkPage = () => {

  const [leftOpen, setLeftOpen] = useState(false);

  useEffect(() => {
      setTimeout(() => {
        setLeftOpen(true);
      }, 600); // Delay to ensure smooth animation
    }, []);

  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

  
    return (
    <div className="min-h-screen bg-[#000] text-white flex flex-col items-center relative font-sans px-4 sm:px-8 pb-16 overflow-hidden">
    <FirefliesEffect /> 
    <TrailingLight />
    
    <GuessLanguagePopup />

    {/* pojects built */}
        <div  className={`absolute left-0 top-96 transform ${leftOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 bg-[#222] text-white p-4 rounded-r-lg shadow-lg w-39 h-28 flex items-center justify-between`}>
            <div>
              <h3 className="text-lg font-[comfortaa] font-bold mb-2">Projects Built</h3>
              <p className="font-[comfortaa] text-2xl font-black pl-12 ">   10+ </p>
            </div>
            <button onClick={() => setLeftOpen(!leftOpen)} className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#222] p-2 rounded-full shadow-md">
            {leftOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
            </button>
          </div>

          {/* crrently working on */}
        <div  className={`absolute left-0 top-3/4 transform ${leftOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 bg-[#222] text-white p-4 rounded-r-lg shadow-lg w-44 h-38 flex items-center justify-between`}>
            <div>
              <h3 className="text-base font-[comfortaa] font-bold ">Currently i am  working on some great full stack projects !!</h3>
            
            </div>
            <button onClick={() => setLeftOpen(!leftOpen)} className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#222] p-2 rounded-full shadow-md">
            {leftOpen ? <FaChevronLeft size={20} /> : <FaChevronRight size={20} />}
            </button>
          </div>
   

       


      {/* Navbar */}
      <nav className="w-full flex flex-col sm:flex-row justify-between items-center p-6 text-lg relative gap-4 sm:gap-0">
      <div >
        
  
      <h1 data-aos="fade-right" className="font-['comfortaa'] font-black text-[white] text-2xl   glow-text">Krish</h1>
      <h6 data-aos="fade-right" className="text-xs font-thin text-gray-300 font-[comfortaa] glow-text">Full Stack Web Developer</h6>
  
</div>

        {/* Capsule Navigation Bar (Centered) */}
        <div className="  absolute left-1/2 top-6 transform -translate-x-1/2 bg-[#F4DFC8] border-[white] rounded-full px-6 py-3 flex items-center gap-6 shadow-lg">
                  <Link  className=" bg-[#000] rounded-full p-0.5  px-3  text-[#F4DFC8]  font-['comfortaa'] font-black text-xl  transition-all duration-300 hover:scale-125">
                    Projects
                  </Link>
                  <div className="bg-[] rounded-full p-0.5 transition-all duration-300 hover:scale-125 animate-fade-in text-sm sm:text-lg  ">    
                    <Link to="/info" className=" px-3  text-[#000] text-xl font-['comfortaa'] font-black   duration-300 hover:scale-110">
                    About Me
                  </Link>
                  </div>
                  
                </div>

        {/* Top Right Buttons */}
        <div data-aos="fade-left" className=" font-[comfortaa] font-black flex glow-text-strong flex-wrap justify-center gap-4 sm:gap-6 mt-2 sm:mt-0">
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
{/* Work Display Section */}
<div  className=" font-[comfortaa]   flex flex-col items-center gap-16 mt-12 w-full px-4 sm:px-0 animate-fade-in py-10">
  {[
    {
      title: "Portfolio Website",
      description: "A sleek and modern personal portfolio website to know more about me and my work.",
      link: "https://yourportfolio.com",
      image: "/images/window/work1.webp",
    },
    {
      title: "Simon Game",
      description: "Test your memory and reflexes with my Simon Game, a fun and interactive challenge ! Can you follow the pattern and beat your high score?",
      link: "https://yourecommerce.com",
      image: "/images/window/work2.webp",
    },
    {
      title: "Chatty",
      description: "Chatty – A sleek, dark-themed chatting platform with gold-accented UI, designed for seamless and interactive conversations in real time.",
      link: "https://yourtaskapp.com",
      image: "/images/window/work3.webp",
    },
    {
      title: "TypoShpere",
      description: "A full-stack blog platform with user login and blog posting capabilities",
      link: "https://yourchatbot.com",
      image: "/images/window/work4.webp",
      
    },
  ].map((project, index) => (
    <a
      key={index}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      
      className={` relative w-full max-w-[50rem] h-[32rem] bg-[#222] rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-500 transform hover:scale-110 hover:bg-[#333] shadow-lg hover:shadow-2xl hover:shadow-gray-500/50 ${
        index % 2 === 0 ? 'hover:rotate-3 hover:-translate-y-2' : 'hover:-rotate-3 hover:-translate-y-2'
      }`}
      style={{   backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(80%)' }}
      onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(120%)' }
      onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(90%)' }
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>

      {/* Project Details */}
      <div  className="relative z-10 text-center px-8">
        <h2 className="   text-white font-black text-3xl sm:text-4xl font-['comfortaa'] tracking-wide drop-shadow-lg">
          {project.title}
        </h2>
        <p  className="font-[comfortaa] mt-3 text-gray-300 text-lg sm:text-xl font-['DM Sans'] font-medium leading-relaxed drop-shadow-sm">
          {project.description}
        </p>
      </div>
    </a>
  ))}
</div>


{/* Floating Side Text & Social Icons */}

  <InteractiveSocialIcons />



        <Footer></Footer>
      
    </div>
  );
};

export default WorkPage;
