import React from 'react';
import { render } from '@testing-library/react';
import Main from '../routers/Main';
import cards from 'data/cards';

describe('', () => {
  test('renders cards', () => {
    // const { length } = cards.length;
    const { container } = render(<Main />);
    expect(container.querySelectorAll('.card')).toHaveLength(3);
  });
});
