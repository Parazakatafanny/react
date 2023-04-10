import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import FormCardList from '../components/CardFormList';

describe('CardList', () => {
  const cards = [
    {
      name: 'Fluffy',
      birthday: '01/01/2022',
      pet: 'cat',
      features: ['horns', 'scales', 'fangs'],
      gender: 'female',
      img: 'https://www.example.com/cat.jpg',
    },
    {
      name: 'Spike',
      birthday: '02/02/2022',
      pet: 'dog',
      features: ['horns', 'scales', 'fangs', 'tail'],
      gender: 'male',
      img: 'https://www.example.com/dog.jpg',
    },
  ];

  it('should render all cards', () => {
    const { container } = render(<FormCardList cards={cards} />);
    expect(container.querySelectorAll('.form-card')).toHaveLength(cards.length);
  });
});
