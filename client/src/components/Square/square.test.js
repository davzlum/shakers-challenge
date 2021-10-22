/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Square from './index';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '../../utils/testUtils';

describe('Square component', () => {
  beforeEach(() => {
    render(<Square value={null} squareClick={jest.fn()} turn="X" position={1} />);
  });
  test('Must contain an element', async () => {
    expect(screen.getByTestId('square-1')).toBeInTheDocument();
  });
  test('onClick you assign value to a square', () => {
    const handleClick = jest.fn();
    jest.mock(handleClick());
    const square = screen.getByTestId('square-1');
    fireEvent.click(square);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
