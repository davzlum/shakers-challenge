import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const ConsoleBoard = ({ turn }) => (
  <>
    {turn
      ? (
        <>
          <h2>Player</h2>
          {' '}
          <div className={`player-${turn}`} />
          {' '}
          <h2>Wins!</h2>
        </>
      )
      : <h2>Tie!</h2>}
  </>
);

ConsoleBoard.propTypes = {
  turn: PropTypes.string.isRequired,
};

export default ConsoleBoard;
