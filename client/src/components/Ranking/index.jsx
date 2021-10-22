import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.scss';

const Ranking = () => {
  const ranking = useSelector((store) => store.ranking);
  const gameCounter = ranking.playerX
    ? ranking.playerX.won + ranking.playerX.lost + ranking.playerX.tied
    : 0;
  return (
    <div className="ranking-container">
      {ranking.playerX
        ? (
          <table className="ranking-table">
            <tbody>
              <tr>
                <td />
                <td><div className="icon-x" /></td>
                <td><div className="icon-o" /></td>
              </tr>
              <tr>
                <th className="row-category">Won</th>
                <td className="player-x">
                  {ranking.playerX.won}
                  {' '}
                  /
                  {' '}
                  {gameCounter}
                </td>
                <td className="player-o">
                  {ranking.playerO.won}
                  {' '}
                  /
                  {' '}
                  {gameCounter}
                </td>
              </tr>
              <tr>
                <th className="row-category">Lost</th>
                <td className="player-x">
                  {ranking.playerX.lost}
                  {' '}
                  /
                  {' '}
                  {gameCounter}
                </td>
                <td className="player-o">
                  {ranking.playerO.lost}
                  {' '}
                  /
                  {' '}
                  {gameCounter}
                </td>
              </tr>
              <tr>
                <th className="row-category">Tied</th>
                <td className="player-x">
                  {ranking.playerX.tied}
                  {' '}
                  /
                  {' '}
                  {gameCounter}
                </td>
                <td className="player-o">
                  {ranking.playerO.tied}
                  {' '}
                  /
                  {' '}
                  {gameCounter}
                </td>
              </tr>
            </tbody>
          </table>
        )
        : <div>There are no ranking to load, please go back to create a new game</div>}
      <Link to="/"><div className="button">Go back</div></Link>
    </div>
  );
};

export default Ranking;
