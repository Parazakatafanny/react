import React, { useState, useEffect, useRef } from 'react';

export default function Search() {
  const [inputValue, setInputValue] = useState<string>(localStorage.getItem('search__input') || '');

  const currentValue = useRef(inputValue);

  useEffect(() => {
    return () => {
      localStorage.setItem('search__input', currentValue.current);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    setInputValue(value);
    currentValue.current = value;
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
