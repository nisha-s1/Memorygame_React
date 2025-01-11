
import React from 'react';
import './Scoreboard.css';

function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <h5>Get points by clicking on an image but don't click on any more than once!</h5>
      <h2>SCORE: {score}</h2>
      <h2>BEST SCORE: {bestScore}</h2>
    </div>
  );
}

export default Scoreboard;
