import React from 'react';

const Banner = ({ questionsCorrect }) => {
  return (
    <div className="result-container">
      <p>You have answered {questionsCorrect} correctly</p>
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default Banner;
