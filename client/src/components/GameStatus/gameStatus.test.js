/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import GameStatus from './index';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../utils/testUtils';

describe('Square component', () => {
  test('Must contain winner text if someone wins', () => {
    render(<GameStatus turn="X" isEndGame />);
    expect(screen.getByText(/Wins/i)).toBeInTheDocument();
  });
  test('Must contain tie text if nobody wins and game ends', () => {
    render(<GameStatus turn={null} isEndGame />);
    expect(screen.getByText(/Tie/i)).toBeInTheDocument();
  });
  test('Must contain next text if game not end', () => {
    render(<GameStatus turn="X" isEndGame={false} />);
    expect(screen.getByText(/next/i)).toBeInTheDocument();
  });
});
