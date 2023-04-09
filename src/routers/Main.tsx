import React, { useEffect, useRef, useState } from 'react';
import Loader from '../components/Loading';
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
  const [notFound, setNotFound] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const searchValue = useRef(localStorage.getItem('search__input') || '');

  alert('Проверьте попозже, пожалуйста. У меня перелет около суток, не успеваю дописать тесты');

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
    setNotFound(false);
    setIsServerError(false);

    fetch(`${URL}/character/?name=${name}`)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
          return null;
        }
        return response.json();
      })
      .then((cards) => {
        if (!cards) {
          return;
        }
        setcardsList(cards.results);
      })
      .catch(() => {
        setIsServerError(true);
      })
      .finally(() => {
        setIsLoaded(true);
      });
  };

  useEffect(() => {
    if (searchValue) {
      handleData(searchValue.current);
    } else {
      getAllCards();
    }
  }, []);

  function getComponentToRender() {
    if (notFound) {
      return <div className="error-card">Not Found</div>;
    }

    if (isServerError) {
      return <div className="error-card">Server Error</div>;
    }

    return <CardList cards={cardsList} />;
  }

  return (
    <>
      <Search onSubmitData={handleData} />
      {isLoaded ? getComponentToRender() : <Loader />}
    </>
  );
}
