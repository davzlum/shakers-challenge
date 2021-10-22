/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Ranking from './index';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../utils/testUtils';

describe('Ranking component', () => {
  const initialState = {
    ranking: {
      playerX: { won: 1 },
      playerO: { won: 0 }
    }
  };
  test('Must contain won text', async () => {
    render(<Ranking />, { initialState });
    expect(screen.getByText(/Won/i)).toBeInTheDocument();
  });
  test('If there are no ranking data must show no ranking text', async () => {
    render(<Ranking />);
    expect(screen.getByText(/no ranking/i)).toBeInTheDocument();
  });
});
