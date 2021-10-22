/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ScoreBoard from './index';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '../../utils/testUtils';

describe('ScoreBoard component', () => {
  test('Must contain number 2', async () => {
    render(<ScoreBoard scoreX={2} scoreO={0} />);
    expect(screen.getByText(/2/i)).toBeInTheDocument();
  });
});
