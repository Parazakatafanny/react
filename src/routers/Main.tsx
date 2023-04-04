import React, { useEffect, useRef, useState } from 'react';
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
  const searchValue = useRef(localStorage.getItem('search__input') || '');

  function getAllCards() {
    fetch(`${URL}/character`)
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        setcardsList(cards.results);
      });
  }

  const handleData = (name: string) => {
    fetch(`${URL}/character/?name=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((cards) => {
        setcardsList(cards.results);
      })
      .catch(() => {
        localStorage.setItem('search__input', '');
        searchValue.current = '';
        throw new Error('there is no such name');
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
      <CardList cards={cardsList} />
    </>
  );
}
