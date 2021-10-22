/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../utils/testUtils';
import Board from './index';

describe('Board component', () => {
  render(<Board squares={[]} squareClick={jest.fn()} turn="X" />);
  test('Must render a board', async () => {
    expect(screen.getAllByTestId('square-box')).toBeTruthy();
  });
});
