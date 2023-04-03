import React from 'react';

interface CardProps {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  img: string;
  planet: string;
}

export default function Card(props: CardProps) {
  const { name, img, status, species, gender, type, planet } = props;
  return (
    <div className="card">
      <img className="card__image" src={img} alt="character" />
      <div className="card__info">
        <div className="card__info-name">name: {name}</div>
        <div className="card__info-status">status: {status}</div>
        <div className="card__info-species">species: {species}</div>
        {type && <div className="card__info-type">type: {type}</div>}
        <div className="card__info-gender">gender: {gender}</div>
        <div className="card__info-planet">planet: {planet}</div>
      </div>
    </div>
  );
}
