import React, { useState, useEffect } from 'react';

export default function Search() {
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('search__input') || '');

  useEffect(() => {
    localStorage.setItem('search__input', inputValue);
  }, [inputValue, setInputValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  return (
    <div className="search">
      <div className="container">
        <div className="search__inner">
          <input value={inputValue} onChange={handleChange} className="search__input" type="text" />
          <button className="search__button" type="button">
            search
          </button>
        </div>
      </div>
    </div>
  );
}
