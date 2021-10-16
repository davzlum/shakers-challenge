/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { PropTypes } from 'prop-types';

const Board = ({ squares, onClick, turn }) => {
  const createSquares = (values) => (
    values.map((value) => (
      <Square
        turn={turn}
        value={squares[value]}
        key={`square_${value}`}
        onClick={() => onClick(value)}
      />
    ))
  );
  return (
    <div className="board">
      <div className="row">
        {createSquares([0, 1, 2])}
      </div>
      <div className="row">
        {createSquares([3, 4, 5])}
      </div>
      <div className="row">
        {createSquares([6, 7, 8])}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.shape([]).isRequired,
  onClick: PropTypes.func.isRequired,
  turn: PropTypes.string.isRequired,
};

export default Board;
