/* eslint-disable no-unused-expressions */
import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const Square = ({
  value, squareClick, turn, position
}) => {
  const handleClick = () => {
    (turn !== null && turn !== 'O' && value === null) && squareClick();
  };

  const style = value ? `square square--${value}` : 'square';

  return (
    <div className={style} onClick={() => handleClick()} data-testid={`square-${position}`} aria-hidden="true" />
  );
};

Square.propTypes = {
  position: PropTypes.number,
  value: PropTypes.string,
  squareClick: PropTypes.func.isRequired,
  turn: PropTypes.string
};

Square.defaultProps = {
  turn: null,
  value: null,
  position: null
};

export default Square;
