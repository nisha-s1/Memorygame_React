
import React, { useState, useEffect } from 'react';
import CardDeck from './components/CardDeck/CardDeck';
import Scoreboard from './components/Scoreboard/Scoreboard';
import { fetchImages } from './components/API/api';
import './App.css';

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    fetchImages().then(setCards).catch(console.error);
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      setScore(0);
      setClickedCards([]);
    } else {
      setScore((prev) => {
        const newScore = prev + 1;
        if (newScore > bestScore) setBestScore(newScore);
        return newScore;
      });
      setClickedCards((prev) => [...prev, id]);
    }
    shuffleCards();
  };

  const shuffleCards = () => {
    setCards((prevCards) => [...prevCards].sort(() => Math.random() - 0.5));
  };

  return (
    <div className="app">
      <div className="headstyle">
      <h1 className="title">CAT MEMORY GAME CHALLENGE</h1>
      </div>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardDeck cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
