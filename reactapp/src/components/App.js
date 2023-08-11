import React, { useState } from 'react';
import Button from './UI/Button/Button';
import Banner from './Banner/Banner';

const App = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);

  const handleClick = () => {
    setShowBanner(true);
  };

  const handleCorrect = () => {
    setQuestionsCorrect(questionsCorrect + 1);
  };

  return (
    <div>
      <h1>Quizz App</h1>
      {showBanner ? (
        <Banner questionsCorrect={questionsCorrect} />
      ) : (
        <Button onClick={handleClick}>Start Quiz</Button>
      )}
    </div>
  );
};

export default App;
