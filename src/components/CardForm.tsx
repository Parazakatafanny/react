import React from 'react';
import { CardFormData } from '../data/interface';

type CardType = {
  card: CardFormData;
};

export default class Card extends React.Component<CardType, object> {
  render() {
    const { card } = this.props;
    const feature: string[] = [];
    if (card.horns) feature.push('horns');
    if (card.tail) feature.push('tail');
    if (card.scales) feature.push('scales');
    if (card.ears) feature.push('ears');
    if (card.fangs) feature.push('fangs');
    const strFeature = feature.join(', ');

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
}
