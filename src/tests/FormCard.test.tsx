import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import FormCard from '../components/CardForm';

describe('Card', () => {
  const card = {
    name: 'Fluffy',
    birthday: '01/01/2022',
    pet: 'cat',
    features: ['horns'],
    gender: 'female',
    img: 'https://www.example.com/cat.jpg',
  };

  it('should render all props data', () => {
    const { container } = render(<FormCard card={card} />);

    const name = container.querySelector('.form-card__name');
    expect(name?.innerHTML).toEqual(card.name);

    const birthday = container.querySelector('.form-card__birthday');
    expect(birthday?.innerHTML).toEqual(card.birthday);

    const pet = container.querySelector('.form-card__pet');
    expect(pet?.innerHTML).toEqual(card.pet);

    const features = container.querySelector('.form-card__features');
    const strFeature = card.features.join(', ');
    expect(features?.innerHTML).toEqual(strFeature);

    const gender = container.querySelector('.form-card__gender');
    expect(gender?.innerHTML).toEqual(card.gender);

    const img = container.querySelector('.form-card__img');
    expect(img?.getAttribute('src')).toEqual(card.img);
  });
});
