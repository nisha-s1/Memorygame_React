
import React from 'react';
import './Card.css';

function Card({ id, image, onClick }) {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={image} alt="Card" className="card-image" />
    </div>
  );
}

export default Card;
