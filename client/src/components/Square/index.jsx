/* eslint-disable no-unused-expressions */
import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const Square = ({ value, onClick, turn }) => {
  const handleClick = () => {
    (turn !== null && value === null) && onClick();
  };

  const style = value ? `square square--${value}` : 'square';

  return (
    <div className={style} onClick={() => handleClick()} aria-hidden="true" />
  );
};

Square.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  turn: PropTypes.string,
};

Square.defaultProps = {
  turn: null,
  value: null,
};

export default Square;
