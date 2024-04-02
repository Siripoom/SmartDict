import React, { useState } from "react";
import { sentences } from "../data/sentences";
import { correctAnswers } from "../data/answers";

const PredictionGame = () => {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentSentence = sentences[sentenceIndex];
  const correctAnswer = correctAnswers[sentenceIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer == "") {
      alert("please enter answer!");
    } else {
      if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        setScore(score + 1);
      }
      setAnswer("");
      if (sentenceIndex + 1 < sentences.length) {
        setSentenceIndex(sentenceIndex + 1);
      } else {
        setShowScore(true);
      }
    }
  };

  const resetGame = () => {
    setSentenceIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-lg shadow-lg my-5 mb-24">
      <h1 className="text-2xl font-semibold mb-4">Prediction Word Game</h1>
      {showScore ? (
        <div>
          <p className="text-lg font-semibold">Congratulations! You've completed the game.</p>
          <p className="text-lg">Your final score is: {score}</p>
          <button
            onClick={resetGame}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div>
          <p className="text-lg">{currentSentence.replace('_', '__________')}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border rounded px-3 py-2 mt-2"
              placeholder="Type your prediction"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button
              type="submit"
              className="btn mt-4 btn-success text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-lg">Score: {score}</p>
        </div>
      )}
    </div>
  );
};


export default PredictionGame;
