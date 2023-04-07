import React, { useEffect, useRef, useState } from 'react';
import Loaded from '../components/Loading';
import CardList from '../components/CardList';
import Search from '../components/Search';

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
  };
  location: {
    name: string;
  };
}

export default function Main() {
  const [cardsList, setcardsList] = useState<CardType[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const searchValue = useRef(localStorage.getItem('search__input') || '');

  function getAllCards() {
    fetch(`${URL}/character`)
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        setcardsList(cards.results);
        setIsLoaded(true);
      });
  }

  const handleData = (name: string) => {
    setIsLoaded(false);
    fetch(`${URL}/character/?name=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        setcardsList(cards.results);
        setIsLoaded(true);
      })
      .catch(() => {
        alert('owibka');
      });
  };

  useEffect(() => {
    if (searchValue) {
      handleData(searchValue.current);
    } else {
      getAllCards();
    }
  }, []);

  return (
    <>
      <Search onSubmitData={handleData} />
      {isLoaded ? <CardList cards={cardsList} /> : <Loaded />}
    </>
  );
}
