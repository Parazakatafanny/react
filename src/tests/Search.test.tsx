import React from 'react';
import { it, describe, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import Search from '../components/Search';
import { store } from '../app/store';

describe('Search component', () => {
  it('should render correctly', () => {
    const wrapper = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });

  it('should update input value on change', () => {
    const { container } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input: HTMLInputElement = container.querySelector('.search__input')!;
    fireEvent.change(input, { target: { value: 'hello' } });
    expect(input.value).toBe('hello');
  });

  it('should save and load input value from localStorage', () => {
    const { unmount, container } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const input: HTMLInputElement = container.querySelector('.search__input')!;
    fireEvent.change(input, { target: { value: 'world' } });

    unmount();

    const newRenderResult = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );
    const newInput: HTMLInputElement = newRenderResult.container.querySelector('.search__input')!;

    expect(newInput.value).toBe('world');
  });
});
