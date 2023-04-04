import React from 'react';
import { CardType } from 'routers/Main';
import Card from './Card';

type Props = {
  cards: Array<CardType>;
};

export default function CardList(props: Props) {
  const { cards } = props;

  return (
    <div className="cards">
      <div className="container">
        <div className="cards__inner">
          {cards.map((card) => (
            <Card
              key={card.id}
              name={card.name}
              gender={card.gender}
              species={card.species}
              img={card.image}
              status={card.status}
              type={card.type}
              planet={card.origin.name}
              locationPlanet={card.location.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
