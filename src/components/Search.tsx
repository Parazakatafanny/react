import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

type ComponentProps = {
  onSubmitData: (data: string) => void;
};

export default function Search(props: ComponentProps) {
  const { onSubmitData } = props;
  const { handleSubmit } = useForm();
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

  function onSubmit() {
    localStorage.setItem('search__input', currentValue.current);
    onSubmitData(inputValue);
  }

  return (
    <div className="search">
      <div className="container">
        <form className="search__inner" onSubmit={handleSubmit(onSubmit)}>
          <input
            value={inputValue}
            onChange={handleChange}
            className="search__input"
            type="search"
          />
          <button className="search__button" type="submit">
            search
          </button>
        </form>
      </div>
    </div>
  );
}
