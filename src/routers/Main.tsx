import React from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
import cards from '../data/cards';

const cardsList = [];
cards.forEach((card) => {
  cardsList.push(
    <Card
      rating={card.rating}
      likes={card.likes}
      description={card.description}
      img={card.thumbnail}
      title={card.title}
    />
  );
});

export default class Main extends React.Component {
  render() {
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
}
