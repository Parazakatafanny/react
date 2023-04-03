import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Search from '../components/Search';
// import cards from '../data/cards';

const URL = 'https://rickandmortyapi.com/api';

export interface CardType {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
}

export default function Main() {
  const [cardsList, setcardsList] = useState<CardType[]>([]);

  useEffect(() => {
    fetch(`${URL}/character`)
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        setcardsList(cards.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Search />
      <div className="cards">
        <div className="container">
          <div className="cards__inner">
            {cardsList.map((card) => (
              <Card
                key={card.id}
                name={card.name}
                gender={card.gender}
                species={card.species}
                img={card.image}
                status={card.status}
                type={card.type}
                planet={card.origin.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
