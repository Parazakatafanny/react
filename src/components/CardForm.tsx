import React from 'react';
import { CardFormData } from './FormAddCard';

type CardType = {
  card: CardFormData;
};

export default function Card(props: CardType) {
  const { card } = props;
  const strFeature = card.features.join(', ');

  return (
    <div className="form-card">
      <img className="form-card__img" src={card.img} alt="pet-img" />
      <div className="form-card__about">
        <div className="form-card__name">{card.name}</div>
        <div className="form-card__birthday">{card.birthday}</div>
        <div className="form-card__pet">{card.pet}</div>
        <div className="form-card__features">{strFeature}</div>
        <div className="form-card__gender">{card.gender}</div>
      </div>
    </div>
  );
}
