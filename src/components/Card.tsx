import React, { useState } from 'react';
import ModalFormCard from './ModalFormCard';

export interface CardProps {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  img: string;
  planet: string;
  locationPlanet: string;
}

export default function Card(props: CardProps) {
  const [modal, setModal] = useState(false);

  const handleData = (dataModal: boolean) => {
    setModal(dataModal);
  };

  const { name, img, status, species, gender, type, planet, locationPlanet } = props;
  return (
    <>
      <div className="card" role="button" tabIndex={0} onClick={() => setModal(true)}>
        <img className="card__image" src={img} alt="character" />
        <div className="card__info">
          <div className="card__info-name">{name}</div>
        </div>
      </div>
      {modal && (
        <ModalFormCard
          card={{
            name,
            status,
            species,
            type,
            gender,
            img,
            planet,
            locationPlanet,
          }}
          onCloseModal={handleData}
        />
      )}
    </>
  );
}
