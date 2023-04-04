import React from 'react';

type ComponentProps = {
  onCloseModal: (dataModal: boolean) => void;
  card: {
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    img: string;
    planet: string;
    locationPlanet: string;
  };
};

export default function ModalFormCard(props: ComponentProps) {
  const { card, onCloseModal } = props;

  return (
    <div className="card-modal">
      <div className="card-modal__inner">
        <div className="card">
          <img className="card__image" src={card.img} alt="character" />
          <div className="card__info">
            <div className="card__info-nameModal">name: {card.name}</div>
            <div className="card__info-status">status: {card.status}</div>
            <div className="card__info-species">species: {card.species}</div>
            {card.type && <div className="card__info-type">type: {card.type}</div>}
            <div className="card__info-gender">gender: {card.gender}</div>
            <div className="card__info-planet">planet: {card.planet}</div>
            <div className="card__info-planet">location: {card.locationPlanet}</div>
          </div>
        </div>
        <div
          className="card-modal__close"
          role="button"
          tabIndex={0}
          onClick={() => onCloseModal(false)}
        >
          x
        </div>
      </div>
    </div>
  );
}
