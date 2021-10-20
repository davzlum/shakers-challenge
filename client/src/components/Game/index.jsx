import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Board from '../Board';
import ScoreBoard from '../ScoreBoard';
import GameStatus from '../GameStatus';
import { player, cpu } from '../../assets/constants';
import { updateRanking, loadRanking, handleError } from '../../redux/actions/actionCreators';
import './style.scss';

const url = process.env.REACT_APP_URL;

const Game = () => {
  const dispatch = useDispatch();
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState('X');
  const [resultText, setResultText] = useState('');

  const ranking = useSelector((store) => store.ranking);
  const message = useSelector((store) => store.message);

  const reset = () => {
    setTurn('X');
    setSquares(Array(9).fill(null));
    setResultText('');
  };

  const endGame = (result) => {
    dispatch(updateRanking(result, ranking));
    setTurn(null);
    setTimeout(() => { reset(); }, 2000);
  };

  async function checkForWinner(newSquares) {
    try {
      const { data } = await axios.post(`${url}/results`, { newSquares });
      if (data.isWinner) {
        endGame(data.player);
        setResultText(
          <GameStatus turn={turn} isEndGame />,
        );
        return;
      } if (data.isTie) {
        endGame(null);
        setResultText(
          <GameStatus turn={null} isEndGame />,
        );
        return;
      }
    } catch (errorCheck) {
      dispatch(handleError('No data loaded'));
    }
    setTurn(turn === player ? cpu : player);
  }

  async function cpuPlay(actualSquares) {
    try {
      const { data } = await axios.post(`${url}/play`, { actualSquares });
      setSquares(data);
      checkForWinner(data);
    } catch (errorCheck) {
      dispatch(handleError('No data loaded'));
    }
  }

  const handleClick = (square) => {
    const newSquares = [...squares];
    newSquares.splice(square, 1, turn);
    setSquares(newSquares);
    checkForWinner(newSquares);
  };

  useEffect(() => {
    if (!ranking.playerX) dispatch(loadRanking());
  }, []);

  useEffect(() => {
    if (turn === cpu) {
      setTimeout(() => { cpuPlay(squares); }, 1000);
    }
  }, [turn]);

  return (
    <>
      <div className="container">
        {!message.errorMessage ? (
          <>
            <Board turn={turn} squares={squares} onClick={handleClick} />
            <div className="turn-board">
              {!resultText
                ? (
                  <GameStatus turn={turn} isEndGame={false} />
                )
                : <>{resultText}</>}
            </div>
            <ScoreBoard
              scoreO={ranking.playerO ? ranking.playerO.won : 0}
              scoreX={ranking.playerX ? ranking.playerX.won : 0}
            />
            <Link to="/ranking"><div className="button">Show Ranking</div></Link>
          </>
        ) : <div>{message.errorMessage}</div>}
      </div>
    </>

  );
};

export default Game;
