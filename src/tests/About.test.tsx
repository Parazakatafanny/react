import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import About from '../routers/About';

describe('testing about page', () => {
  it('renders without crashing', () => {
    const { container } = render(<About />);
    expect(container.querySelectorAll('.about')).toBeTruthy();
  });
});
