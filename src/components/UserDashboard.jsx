// src/components/UserDashboard.js
import React, { useState } from 'react';
import { quizData } from '../QuizData';

const UserDashboard = ({ onHomeClick, onQuizCompletion }) => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [username, setUsername] = useState('');

  const handleQuizSelect = (quizType) => {
    setSelectedQuiz(quizType);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswers([]);
    setWrongAnswers([]);
  };

  const handleAnswerClick = (selectedAnswer) => {
    const question = quizData[selectedQuiz][currentQuestion];
    const isCorrect = question.correctAnswer.includes(selectedAnswer);

    if (question.type === 'single' || question.type === 'true-false') {
      // Single-choice or True/False: Only one answer allowed
      setSelectedAnswers([selectedAnswer]);
    } else if (question.type === 'multiple') {
      // Multiple-choice: Allow multiple answers
      if (selectedAnswers.includes(selectedAnswer)) {
        // Remove if already selected
        setSelectedAnswers(selectedAnswers.filter((ans) => ans !== selectedAnswer));
      } else {
        // Add if not selected
        setSelectedAnswers([...selectedAnswers, selectedAnswer]);
      }
    }
  };

  const handleNextQuestion = () => {
    const question = quizData[selectedQuiz][currentQuestion];
    const isCorrect =
      selectedAnswers.length === question.correctAnswer.length &&
      selectedAnswers.every((ans) => question.correctAnswer.includes(ans));

    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrongAnswers([
        ...wrongAnswers,
        {
          question: question.question,
          correctAnswer: question.correctAnswer,
          userAnswer: selectedAnswers,
        },
      ]);
    }

    if (currentQuestion + 1 < quizData[selectedQuiz].length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswers([]); // Reset selected answers for the next question
    } else {
      setShowScore(true);
      onQuizCompletion(username, score, selectedQuiz); // Pass quiz type
    }
  };

  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / quizData[selectedQuiz]?.length) * 100 || 0;

  const renderQuiz = () => {
    const quiz = quizData[selectedQuiz];
    const question = quiz[currentQuestion];

    return (
      <div className="quiz-container fade-in">
        <h3>Question {currentQuestion + 1}</h3>
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>{question.question}</p>
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(option)}
            className={
              selectedAnswers.includes(option)
                ? question.correctAnswer.includes(option)
                  ? 'correct'
                  : 'incorrect'
                : ''
            }
          >
            {option}
          </button>
        ))}
        <button onClick={handleNextQuestion} disabled={selectedAnswers.length === 0}>
          {currentQuestion + 1 < quiz.length ? 'Next' : 'Finish'}
        </button>
      </div>
    );
  };

  return (
    <div>
      <h2>User Dashboard</h2>
      <div className="home-button">
        <button onClick={onHomeClick}>Home</button>
      </div>
      {!selectedQuiz ? (
        <div className="fade-in">
          <h3>Select a Quiz</h3>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => handleQuizSelect('frontend')}>Frontend Quiz</button>
          <button onClick={() => handleQuizSelect('backend')}>Backend Quiz</button>
        </div>
      ) : showScore ? (
        <div className="quiz-container fade-in">
          <h3>Your Score: {score} / {quizData[selectedQuiz].length}</h3>
          <h4>Wrong Answers:</h4>
          {wrongAnswers.map((wrongAnswer, index) => (
            <div key={index} className="wrong-answer">
              <p><strong>Question:</strong> {wrongAnswer.question}</p>
              <p><strong>Your Answer:</strong> {wrongAnswer.userAnswer.join(', ')}</p>
              <p><strong>Correct Answer:</strong> {wrongAnswer.correctAnswer.join(', ')}</p>
            </div>
          ))}
          <button onClick={() => setSelectedQuiz(null)}>Retake Quiz</button>
        </div>
      ) : (
        renderQuiz()
      )}
    </div>
  );
};

export default UserDashboard;