import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";


const questions = [
  {
    question: "What does 'const' mean in JavaScript?",
    options: ["A variable that can change", "A constant variable", "A function keyword", "A loop statement"],
    answer: "A constant variable"
  },
  {
    question: "Which HTML tag is used to include JavaScript?",
    options: ["<javascript>", "<script>", "<js>", "<code>"],
    answer: "<script>"
  },
  {
    question: "What is the output of '2' + 2 in JavaScript?",
    options: ["4", "22", "Error", "Undefined"],
    answer: "22"
  },
  {
    question: "Which of these is NOT a JavaScript framework?",
    options: ["React", "Vue", "Django", "Angular"],
    answer: "Django"
  }
];

const CodingQuestionPopup = () => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [popupTimeout, setPopupTimeout] = useState(null);

  useEffect(() => {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setQuestion(randomQuestion);
  }, []);

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
    if (option === question.answer) {
      setIsCorrect(true);
      setShowConfetti(true);

      // Clear previous timeout if any
      if (popupTimeout) clearTimeout(popupTimeout);

      // Set a new timeout to close popup after 10 seconds
      const timeout = setTimeout(() => {
        setShowPopup(false);
        setShowConfetti(false);
      }, 4000); // 10 seconds

      setPopupTimeout(timeout);
    } else {
      setIsCorrect(false);
    }
  };

  if (!showPopup) return null; // Hide popup after timeout

  return (
    <div data-aos="fade-right" className="absolute left-10 bottom-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-5  rounded-lg shadow-lg w-72 text-center">
      {showConfetti && <Confetti width="full" height="full" />}
      <h3 className="text-lg font-bold mb-2">Coding Challenge</h3>
      {question && (
        <>
          <p className="mb-4">{question.question}</p>
          <div className="grid grid-cols-2 gap-2">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`p-2 rounded-md text-sm font-semibold transition-all duration-300 ${
                  selectedAnswer === option
                    ? option === question.answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-600 hover:bg-gray-700"
                }`}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CodingQuestionPopup;
