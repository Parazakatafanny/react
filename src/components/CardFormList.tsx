import React from 'react';
import { CardFormData } from '../data/interface';
import CardForm from './CardForm';

type Props = {
  cards: Array<CardFormData>;
};

export default class CardList extends React.Component<Props, object> {
  render() {
    const { cards } = this.props;
    const cardsList: JSX.Element[] = [];
    cards.forEach((card, idx) => {
      const key = `${idx}-${card.name} `;
      cardsList.push(<CardForm card={card} key={key} />);
    });
    return (
      <div className="card-list">
        <div className="container">
          <div className="card-list__inner">{cardsList}</div>
        </div>
      </div>
    );
  }
}
