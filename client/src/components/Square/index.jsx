/* eslint-disable no-unused-expressions */
import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const Square = ({ value, squareClick, turn }) => {
  const handleClick = () => {
    (turn !== null && turn !== 'O' && value === null) && squareClick();
  };

  const style = value ? `square square--${value}` : 'square';

  return (
    <div className={style} onClick={() => handleClick()} data-testid="square-box" aria-hidden="true" />
  );
};

Square.propTypes = {
  value: PropTypes.string,
  squareClick: PropTypes.func.isRequired,
  turn: PropTypes.string
};

Square.defaultProps = {
  turn: null,
  value: null
};

export default Square;
