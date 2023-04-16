import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../app/store';
import { setSearchValue, setCurrentValue } from '../app/search';

export default function Search() {
  const search = useAppSelector((state) => state.search.currentValue);
  const dispatch = useAppDispatch();

  const { handleSubmit } = useForm();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    dispatch(setCurrentValue(value));
  };

  function onSubmit() {
    dispatch(setSearchValue(search));
  }

  return (
    <div className="search">
      <div className="container">
        <form className="search__inner" onSubmit={handleSubmit(onSubmit)}>
          <input value={search} onChange={handleChange} className="search__input" type="search" />
          <button className="search__button" type="submit">
            search
          </button>
        </form>
      </div>
    </div>
  );
}
