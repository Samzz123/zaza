// src/pages/Quiz.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'; // Import the new CSS file

const questions = [
  {
    q: 'Which of these activities sounds most interesting?',
    options: ['Building a robot', 'Writing a story'],
  },
  {
    q: 'When solving a problem, you prefer to:',
    options: ['Analyze data and find a logical solution', 'Brainstorm creative and unique ideas'],
  },
  {
    q: 'Would you rather spend an afternoon:',
    options: ['Organizing your workspace perfectly', 'Experimenting with a new recipe'],
  },
  {
    q: 'Which subject do you feel more drawn to?',
    options: ['Physics and Mathematics', 'History and Literature'],
  },
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setQuizStarted(false);
    setQuizFinished(false);
  }

  // If the quiz hasn't started, show the intro screen.
  if (!quizStarted) {
    return (
      <div className="quiz-page">
        <div className="quiz-intro">
          <img src="/assets/btech2-icon.png" alt="Quiz icon" className="quiz-intro-icon"/>
          <h1>Career Discovery Quiz</h1>
          <p>
            Answer a few quick questions to find a personalized career and
            course path that aligns with your interests and strengths.
          </p>
          <button className="start-quiz-btn" onClick={() => setQuizStarted(true)}>
            Start the Quiz
          </button>
        </div>
      </div>
    );
  }

  // If the quiz is finished, show the results screen.
  if (quizFinished) {
    return (
      <div className="quiz-page">
        <div className="quiz-results">
          <h2>🎉 Thank You!</h2>
          <p>
            We have your results. Based on your answers, we’re preparing a
            personalized list of recommended courses and career paths for you.
          </p>
          <div className="results-actions">
            <Link to="/courses" className="start-quiz-btn">
              See My Recommendations
            </Link>
            <button className="option-button" onClick={handleRestart}>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Otherwise, show the active quiz question.
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="quiz-page">
      <div className="quiz-container">
        <div className="progress-bar-container">
          <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <div className="question-header">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <h2 className="question-text">{currentQuestion.q}</h2>
        <div className="options-grid">
          {currentQuestion.options.map((option, idx) => (
            <button key={idx} className="option-button" onClick={handleAnswerClick}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}