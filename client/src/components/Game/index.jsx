import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Board from '../Board';
import { updateRanking, loadRanking } from '../../redux/actions/actionCreators';
import './style.scss';

const Game = () => {
  const dispatch = useDispatch();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [resultText, setResultText] = useState('');
  const [isEndGame, setIsEndGame] = useState(false);

  const [score, setScore] = useState({
    X: 0,
    O: 0,
  });

  const ranking = useSelector((store) => store.rankingReducer);
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch(loadRanking());
  }, [isEndGame]);

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setResultText('');
  //  setIsEndGame(false);
  };

  const endGame = (result) => {
    dispatch(updateRanking(result, ranking));
    setTurn(null);
    setIsEndGame(true);
    console.log(ranking);
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
      const { data } = await axios.post('http://localhost:2025/results', { newSquares });
      console.log(data);
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
      <Link to="/ranking">Show Ranking</Link>
    </div>
  );
};

export default Game;
