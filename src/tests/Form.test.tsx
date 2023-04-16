import React from 'react';
import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { Provider } from 'react-redux';
import FormAddCards from '../components/FormAddCard';
import { store } from '../app/store';

describe('Form', () => {
  it('render without crashing', async () => {
    const { container } = render(
      <Provider store={store}>
        <FormAddCards />
      </Provider>
    );
    expect(container.querySelector('.form')).toBeTruthy();
    expect(screen.getByLabelText('name')).toBeTruthy();
    expect(screen.getByLabelText('birthday')).toBeTruthy();
    expect(screen.getByLabelText('choose a pet:')).toBeTruthy();
    expect(screen.getByText('Choose your pet features:')).toBeTruthy();
    expect(screen.getByText('Select a gender of the pet:')).toBeTruthy();
    const file = container.querySelector('#pet-img');
    expect(file).toBeTruthy();
  });
});
