import React from 'react';
import { CardFormData } from '../data/interface';
import CardForm from './CardForm';

type Props = {
  cards: Array<CardFormData>;
};

export default function CardList(props: Props) {
  const { cards } = props;
  const cardsList: JSX.Element[] = [];
  cards.forEach((card, idx) => {
    const key = `${idx}-${card.name} `;
    cardsList.push(<CardForm card={card} key={key} />);
  });
  return (
    <div className="card-list">
      <div className="container">
        <div className="card-list__inner">{cardsList}</div>
      </div>
    </div>
  );
}
