import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect } from 'vitest';
import Main from '../routers/Main';

describe('', () => {
  it('renders without crashing', () => {
    const { container } = render(<Main />);
    expect(container.querySelectorAll('.card')).toHaveLength(0);
  });
});
