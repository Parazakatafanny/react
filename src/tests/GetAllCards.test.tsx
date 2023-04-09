import React from 'react';
import { render } from '@testing-library/react';
import { it, describe, expect, vi } from 'vitest';
import { CardProps } from '../components/Card';

// global.fetch = vi.fn();

// function createFetchResponse(data: CardProps) {
//   return { json: () => new Promise((resolve) => resolve(data)) };
// }

// describe('makes a GET request to fetch todo list and returns the result', () => {
//   it('renders without crashing', () => {});
// });
