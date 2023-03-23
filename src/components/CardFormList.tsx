import React from 'react';

export default class CardList extends React.Component {
  render() {
    return (
      <div className="form-card">
        <img
          className="form-card__img"
          src="https://i.pinimg.com/564x/59/b7/71/59b771d17cc1844a23b1baa4ed4c77ea.jpg"
          alt="pet-img"
        />
        <div className="form-card__about">
          <div className="form-card__name">barsic</div>
          <div className="form-card__birthday">23.04.2021</div>
          <div className="form-card__pet">cat</div>
          <div className="form-card__features">ears, fangs</div>
          <div className="form-card__gender">male</div>
        </div>
      </div>
    );
  }
}
