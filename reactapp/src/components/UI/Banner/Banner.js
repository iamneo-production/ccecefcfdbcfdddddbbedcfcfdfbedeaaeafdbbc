import React, { useState } from 'react';

const Banner = () => {
  const [questions] = useState([
    {
      question: 'Who is the father of our nation?',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Donald Trump', 'Barack Obama'],
      answer: 'Mahatma Gandhi'
    },
    {
      question: 'What color are the leaves?',
      options: ['Blue' , 'Red' , 'Yellow', 'Green' ],
      answer: 'Green'
    },
    {
      question: 'What color is the sky ?',
      options: ['Blue', 'Red', 'Yellow', 'Green'],
      answer: 'Blue'
    },
    {
      question: 'What color is the fire ?',
      options: ['Blue', 'Red', 'Yellow', 'Green'],
      answer: 'Red'
    }
  ]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleOptionClick = (question, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [question]: option
    });
  };

  const handleShowResults = () => {
    setShowResults(true);
  };

  const handleStartQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    let score = 0;
    for (let question of questions) {
      if (selectedAnswers[question.question] === question.answer) {
        score++;
      }
    }

    return (
      <div className="result-container">
        
        <p>You have answered {score} / {questions.length} correctly</p>
        <button onClick={handleStartQuiz}>Start Quiz</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {questions.map((question, index) => (
        <div key={index} className="question-container">
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => handleOptionClick(question.question, option)}
              disabled={selectedAnswers[question.question]}
            >
              {option}
            </button>
          ))}
        </div>
      ))}
      {Object.keys(selectedAnswers).length === questions.length && (
        <button onClick={handleShowResults}>Show Results</button>
      )}
    </div>
  );
};

export default Banner;