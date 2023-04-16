import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Erorr from '../routers/Erorr';

describe('testing error page', () => {
  it('renders without crashing', () => {
    const { container } = render(<Erorr />);
    expect(container.querySelectorAll('.error-page')).toBeTruthy();
  });
});
