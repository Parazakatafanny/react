import React from 'react';
import FormAddCards from '../components/FormAddCard';
import CardFormList from '../components/CardFormList';

export default function AddCard() {
  return (
    <div className="add-card">
      <FormAddCards />
      <CardFormList />
    </div>
  );
}
