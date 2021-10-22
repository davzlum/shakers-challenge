import React from 'react';
import { PropTypes } from 'prop-types';
import Square from '../Square';
import './style.scss';

const Board = ({ squares, squareClick, turn }) => {
  const createSquares = (values) => (
    values.map((value) => (
      <Square
        turn={turn}
        value={squares[value]}
        key={`square_${value}`}
        position={value}
        squareClick={() => squareClick(value)}
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
  squares: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired,
  squareClick: PropTypes.func.isRequired,
  turn: PropTypes.string
};

Board.defaultProps = {
  turn: null
};

export default Board;
