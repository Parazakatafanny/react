import React, { useState } from 'react';
import { CardFormData } from '../data/interface';
import FormAddCards from '../components/FormAddCard';
import CardsList from '../components/CardFormList';

export default function AddCard() {
  const [cards, setCards] = useState<Array<CardFormData>>([]);

  const handleData = (dataCard: CardFormData) => {
    setCards((prevState) => [...prevState, dataCard]);
  };

  return (
    <div className="add-card">
      <FormAddCards onSubmitData={handleData} />
      <CardsList cards={cards} />
    </div>
  );
}
