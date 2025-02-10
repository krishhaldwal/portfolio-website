import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const quotes = [
  { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
  { text: "Java is to JavaScript what car is to carpet.", author: "Chris Heilmann" },
  { text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Programming isn't about what you know; it's about what you can figure out.", author: "Chris Pine" }
];

const DeveloperWisdomPopup = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [displayText, setDisplayText] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setDisplayText(""); // Reset before typing effect starts
  
    let charIndex = 0;
  
    const typingInterval = setInterval(() => {

    setTimeout(() => {
        setIsOpen(!isOpen);
    }, 100);


      setDisplayText((prev) => {
        if (charIndex < randomQuote.text.length) {
          return randomQuote.text.slice(0, charIndex + 1); // Always take correct slice
        } else {
          clearInterval(typingInterval);
          return prev; // Return final text
        }
      });
      charIndex++;
    }, 75); // Adjust speed if needed
  
    return () => clearInterval(typingInterval);
  }, []);
  

  return (
    <div 
      className={`absolute right-0 top-1/2 transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } bg-gray-900 text-white p-4 rounded-l-lg shadow-lg w-72 border-l-4 border-blue-500`}
    >
      {/* Toggle Button (Now properly moving with the card) */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`absolute left-[-20px] top-1/2 transform -translate-y-1/2 
        bg-gray-900 text-white p-2 rounded-full shadow-md transition-all`}
      >
        {isOpen ? <FaChevronRight size={18} /> : <FaChevronLeft size={18} />}
      </button>

      {/* Quote Content */}
      <h3 className="text-lg font-bold">💡 Daily Developer Wisdom</h3>
      <p className="text-sm min-h-[50px]">{displayText}</p>
      <p className="text-xs text-gray-400 mt-2">- {quote.author}</p>
    </div>
  );
};

export default DeveloperWisdomPopup;

