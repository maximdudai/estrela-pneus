import { useState } from "react";

import * as questionData from "./data/Questions.json";


import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai'; 

export const FrequentlyQuestions = () => {
  const [activeQuestion, setActiveQuestion] = useState({
    bestTire: false,
    readTire: false,
    changeTire: false,
    wearTire: false,
  });

  const handleToggleActiveQuestion = (question, toggle) => {
    setActiveQuestion((other) => ({
      ...other,
      [question]: toggle,
    }));
  };

  
  return (
    <div className="frequentlyQuestion w-full">
      <ul>
        {questionData.map((question, index) => {
          return <li key={index}>
            <span>{question.question}</span>
            <button onClick={() => handleToggleActiveQuestion('bestTire', activeQuestion.bestTire)}>
              <AiOutlineDown />
            </button>
          </li>;
        })}
      </ul>
    </div>
  );
};
