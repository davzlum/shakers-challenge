import React, { useState } from 'react';
import Board from '../Board';
import './style.scss';

const winningPositions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [resultText, setResultText] = useState('');
  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setResultText('');
  };

  const endGame = (result) => {
    setTurn(null);
    if (result) {
      setScore({
        ...score,
        [result]: score[result] + 1,
      });
    }
    setTimeout(() => { reset(); }, 2000);
  };

  const checkForWinner = (newSquares) => {
    winningPositions.forEach((position) => {
      const [top, center, bottom] = position;
      if (newSquares[top]
          && newSquares[top] === newSquares[center] && newSquares[top] === newSquares[bottom]) {
        endGame(newSquares[top]);
        setResultText(
          <>
            <h2>Player</h2>
            {' '}
            <div className={`player-${turn}`} />
            {' '}
            <h2>Wins!</h2>
          </>,
        );
      }
    });
    if (!newSquares.includes(null)) {
      endGame(null);
      setResultText(<h2>Tie!</h2>);
      return;
    }
    setTurn(turn === 'X' ? 'O' : 'X');
  };

  const handleClick = (square) => {
    const newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  };

  return (
    <div className="container">
      <Board turn={turn} squares={squares} onClick={handleClick} />
      <div className="turn-board">
        {!resultText
          ? (
            <>
              <h2>
                Next Player:
                {' '}
              </h2>
              <div className={turn === 'X' ? 'player-X' : 'player-O'} />
            </>
          )
          : <>{resultText}</>}
      </div>
    </div>
  );
};

export default Game;
