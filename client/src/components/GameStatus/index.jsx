import React from 'react';
import { PropTypes } from 'prop-types';
import './style.scss';

const GameStatus = ({ turn, isEndGame }) => (
  <>
    {isEndGame
      ? (
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
      )
      : (
        <>
          <h2>
            Next Player:
            {' '}
          </h2>
          <div className={turn === 'X' ? 'player-X' : 'player-O'} />
        </>
      )}
  </>

);

GameStatus.propTypes = {
  turn: PropTypes.string,
  isEndGame: PropTypes.bool.isRequired
};

GameStatus.defaultProps = {
  turn: null
};

export default GameStatus;
