import React from 'react';
import { PropTypes } from 'prop-types';
// import './style.scss';

const ScoreBoard = ({ scoreX, scoreO }) => (
  <div className="score-board">
    <div>{scoreX}</div>
    <div>{scoreO}</div>
  </div>
);

ScoreBoard.propTypes = {
  scoreX: PropTypes.number.isRequired,
  scoreO: PropTypes.number.isRequired,
};

export default ScoreBoard;
