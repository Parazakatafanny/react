import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Card from '../components/Card';

describe('Card component', () => {
  it('renders Card component with given props', () => {
    const props = {
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: 'unknown',
      location: 'Citadel of Ricks',
      img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };

    const { container } = render(
      <Card
        name={props.name}
        status={props.status}
        species={props.species}
        type={props.type}
        gender={props.gender}
        img={props.img}
        planet={props.origin}
        locationPlanet={props.location}
      />
    );
    const name = container.querySelector('.card__info-name');
    expect(name?.innerHTML).toEqual(props.name);
    const img = container.querySelector('.card__image');
    expect(img?.getAttribute('src')).toEqual(props.img);
  });
});
