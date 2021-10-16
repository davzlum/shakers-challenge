/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');

  const handleClick = (square) => {
    const newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  return (
    <div className="container">
      <Board turn={turn} squares={squares} onClick={handleClick} />
    </div>
  );
};

export default Game;
