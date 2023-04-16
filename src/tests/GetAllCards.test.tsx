/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { it, describe, expect, vi } from 'vitest';
import { Provider } from 'react-redux';
import Main, { URL } from '../routers/Main';
import { store } from '../app/store';

describe('makes a GET request to fetch todo list and returns the result', () => {
  it('gets all cards on initial render', async () => {
    const { container } = render(
      <Provider store={store}>
        <Main />
      </Provider>
    );
    await waitForElementToBeRemoved(() => container.querySelector('.loader'));
    const names = Array.from(container.querySelectorAll('.card__info-name'));

    expect(names.length).toEqual(1);
    expect(names[0].innerHTML).toEqual('Rick Sanchez Test');
  });
});
