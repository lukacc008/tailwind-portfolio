import React, { useState } from "react";

import { paragraphs, buttonLabels } from "../textdata/data";

export default function About() {
  const [selectedParagraph, setSelectedParagraph] = useState(0);

  const handleButtonClick = (index) => {
    setSelectedParagraph(index);
  };

  return (
    <div className="bg-plum">
      <h1 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-gold mb-16">
        Main features of this project
      </h1>
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-2 pt-2">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className="bg-indigo text-gold hover:bg-indigo active:bg-gold rounded-xl p-2 focus:outline-none focus:ring focus:ring-gold"
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex justify-center pb-16">
        <div className="bg-indigo flex justify-center text-center h-32 lg:w-1/2 md:w-4/5 sm:w-4/5 mt-6 p-2 border-2 rounded-xl text-gold max-h-full overflow-auto">
          {paragraphs[selectedParagraph]}
        </div>
      </div>
    </div>
  );
}
