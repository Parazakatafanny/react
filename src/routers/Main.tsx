import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import cards from '../data/cards';

export default function Main() {
  const cardsList: JSX.Element[] = [];
  cards.forEach((card) => {
    cardsList.push(
      <Card
        key={card.id}
        rating={card.rating}
        likes={card.likes}
        description={card.description}
        img={card.thumbnail}
        title={card.title}
      />
    );
  });
  return (
    <>
      <Search />
      <div className="cards">
        <div className="container">
          <div className="cards__inner">{cardsList}</div>
        </div>
      </div>
    </>
  );
}
