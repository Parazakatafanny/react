import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import ModalFormCard from '../components/ModalFormCard';

describe('Card component', () => {
  it('renders Card component with given props', () => {
    const props = {
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      planet: 'unknown',
      locationPlanet: 'Citadel of Ricks',
      img: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    };

    const { container } = render(<ModalFormCard card={props} onCloseModal={() => {}} />);
    const name = container.querySelector('.card__info-nameModal');
    expect(name?.innerHTML).toEqual(`name: ${props.name}`);

    const status = container.querySelector('.card__info-status');
    expect(status?.innerHTML).toEqual(`status: ${props.status}`);

    const species = container.querySelector('.card__info-species');
    expect(species?.innerHTML).toEqual(`species: ${props.species}`);

    const gender = container.querySelector('.card__info-gender');
    expect(gender?.innerHTML).toEqual(`gender: ${props.gender}`);

    const planet = container.querySelector('.card__info-planet');
    expect(planet?.innerHTML).toEqual(`planet: ${props.planet}`);

    const location = container.querySelector('.card__info-location');
    expect(location?.innerHTML).toEqual(`location: ${props.locationPlanet}`);

    const img = container.querySelector('.card__image');
    expect(img?.getAttribute('src')).toEqual(props.img);
  });
});
