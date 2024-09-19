import React, { useState } from 'react';
import questions from './questions';
import Result from './Result';

function Survey() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [KamalaScore, setKamalaScore] = useState(0);
  const [TrumpScore, setTrumpScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswer = (party, weight = 1) => {
    if (party === 'Kamala') {
      setKamalaScore(KamalaScore + weight);
    } else if (party === 'Trump') {
      setTrumpScore(TrumpScore + weight);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <Result KamalaScore={KamalaScore} TrumpScore={TrumpScore} />
    );
  } else {
    const question = questions[currentQuestion];
    return (
      <div className="survey">
        {/* Use Base64 encoded image or ensure correct path */}
        <img
          src="/logo_full.png"
          alt="Logo"
          className="logo-fixed-bottom"
        />
        <h2>
          Soru {currentQuestion + 1} / {questions.length}
        </h2>
        <h3>{question.text}</h3>
        <div className="options">
          {question.options.map((option) => (
            <button
              key={option.text}
              onClick={() => handleAnswer(option.party, option.weight)}
            >
              {option.text}
            </button>
          ))}
        </div>
      </div>
      
    );
  }
}

export default Survey;

