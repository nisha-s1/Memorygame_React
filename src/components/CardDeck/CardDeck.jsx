
import React from 'react';
import Card from '../Card/Card';
import './CardDeck.css';

function CardDeck({ cards, onCardClick }) {
  return (
    <div className="card-deck">
      {cards.map((card) => (
        <Card key={card.id} id={card.id} image={card.image} onClick={onCardClick} />
      ))}
    </div>
  );
}

export default CardDeck;
