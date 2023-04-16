import React from 'react';
import Loader from '../components/Loading';
import CardList from '../components/CardList';
import Search from '../components/Search';
import { useAppSelector } from '../app/store';
import { useGetCharacterByNameQuery } from '../app/API';

export default function Main() {
  const searchValue = useAppSelector((state) => state.search.value);
  const { data, error, isLoading } = useGetCharacterByNameQuery(searchValue);

  function getComponentToRender() {
    if (error) {
      return <div className="error-card">Not Found</div>;
    }

    return <CardList cards={data!.results} />;
  }

  return (
    <>
      <Search />
      {isLoading ? <Loader /> : getComponentToRender()}
    </>
  );
}
