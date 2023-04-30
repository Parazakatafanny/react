import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import MainLayout from '../components/MainLayout';

describe('Routes', () => {
  it('should render Main component when visiting /', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <MainLayout />
      </MemoryRouter>
    );
    expect(container.querySelectorAll('.cards')).toBeTruthy();
  });

  it('should render About component when visiting /about-us', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/about-us']}>
        <MainLayout />
      </MemoryRouter>
    );
    expect(container.querySelectorAll('.about')).toBeTruthy();
  });

  it('should render AddCard component when visiting /add-card', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/add-card']}>
        <MainLayout />
      </MemoryRouter>
    );
    expect(container.querySelectorAll('.add-card')).toBeTruthy();
  });

  it('should render ErrorPage component when visiting /errors', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/errors']}>
        <MainLayout />
      </MemoryRouter>
    );
    expect(container.querySelectorAll('.error-page')).toBeTruthy();
  });
});
