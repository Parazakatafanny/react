/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { render, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { it, describe, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import Main, { URL } from '../routers/Main';
import { CardType } from '../interfaces/mainCards';
import { store } from '../app/store';

global.fetch = vi.fn();

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

function createFetchResponse<T>(responseData: T) {
  return {
    // eslint-disable-next-line no-promise-executor-return
    json: () => new Promise((resolve) => resolve(responseData)),
  };
}

describe('makes a GET request to fetch todo list and returns the result', () => {
  it('gets all cards on initial render', async () => {
    // @ts-ignore
    fetch.mockResolvedValue(
      createFetchResponse({
        results: data,
      })
    );

    const { container } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    await waitForElementToBeRemoved(() => container.querySelector('.loader'));

    const names = Array.from(container.querySelectorAll('.card__info-name'));

    expect(names.length).toEqual(1);
    expect(names[0].innerHTML).toEqual(data[0].name);
  });

  it('gets filtered results', async () => {
    // @ts-ignore
    fetch.mockResolvedValue(
      createFetchResponse({
        results: data,
      })
    );

    const user = userEvent.setup();
    const { container } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    await waitForElementToBeRemoved(() => container.querySelector('.loader'));

    const input: HTMLInputElement = container.querySelector('.search__input')!;
    await user.type(input, 'Rick');

    const submitButton = container.querySelector('.search__button')!;
    await user.click(submitButton);

    expect(fetch).toHaveBeenCalledWith(`${URL}/character/?name=Rick`);
  });
});
