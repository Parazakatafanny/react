import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Provider } from 'react-redux';
import AddCard from '../routers/AddCard';
import { store } from '../app/store';

describe('testing add card page', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <AddCard />
      </Provider>
    );
    expect(container.querySelectorAll('.add-card')).toBeTruthy();
  });
});
