import React, { useState } from 'react';
import axios from 'axios';
import Board from '../Board';
import './style.scss';

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

  async function checkForWinner(newSquares) {
    try {
      const { data } = await axios.put('http://localhost:2025/results', { newSquares });
      if (data.isWinner) {
        endGame(data.player);
        setResultText(
          <>
            <h2>Player</h2>
            {' '}
            <div className={`player-${turn}`} />
            {' '}
            <h2>Wins!</h2>
          </>,
        );
      } else if (data.isTie) {
        endGame(null);
        setResultText(<h2>Tie!</h2>);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  }

  const handleClick = (square) => {
    const newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
    setTurn(turn === 'X' ? 'O' : 'X');
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
