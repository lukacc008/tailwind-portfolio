import React, { useState } from "react";

export default function About() {
  const [selectedParagraph, setSelectedParagraph] = useState(0);

  const paragraphs = [
    "Paragraph 1 content goes here.",
    "Paragraph 2 content goes here.",
    "Paragraph 3 content goes here.",
    "Paragraph 4 content goes here.",
    "Paragraph 5 content goes here.",
    "Paragraph 6 content goes here.",
  ];

  const buttonLabels = [
    "Tailwind CSS",
    "useRef hook",
    "useState hook",
    "SmoothScroll",
    "AOS",
    "EmailJS",
  ];

  const handleButtonClick = (index) => {
    setSelectedParagraph(index);
  };

  return (
    <div className="bg-plum">
      <h1 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-gold mb-16">Main features of this project</h1>
      <div className="flex justify-center gap-2 pt-2">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className="bg-indigo text-gold hover:bg-indigo active:bg-gold rounded-xl p-2"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex justify-center pb-6">
        <div className="bg-indigo flex justify-center w-1/2 mt-6 p-2 border-2 rounded-xl text-gold">{paragraphs[selectedParagraph]}</div>
      </div>
    </div>
  );
}
