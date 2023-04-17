import React from 'react';
import CardForm from './CardForm';
import { useAppSelector } from '../app/store';

export default function CardList() {
  const cards = useAppSelector((state) => state.cardsForm.value);

  return (
    <div className="card-list">
      <div className="container">
        <div className="card-list__inner">
          {cards.map((card, idx) => (
            <CardForm card={card} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
