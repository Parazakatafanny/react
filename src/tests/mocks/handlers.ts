/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';

import { CardType } from '../../interfaces/mainCards';

const data: CardType[] = [
  {
    id: 1,
    name: 'Rick Sanchez Test',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
    },
    location: {
      name: 'Citadel of Ricks',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
];

export const handlers = [
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: data,
      })
    );
  }),
];
