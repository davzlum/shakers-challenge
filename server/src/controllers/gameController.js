const debug = require('debug')('app:gameController');
const Ranking = require('../model/rankingModel');
const { checkForWinner } = require('../helpers/game.helper');

function GameController() {
  async function getWinner(req, res) {
    try {
      const { newSquares } = req.body;
      const winner = checkForWinner(newSquares);
      res.json(winner);
    } catch (error) {
      res.status(404);
      res.send(error);
      debug(error);
    }
  }

  async function getRanking(req, res) {
    try {
      const ranking = await Ranking.findById('616d6907d0048d06aa4c1fb3');
      res.json(ranking);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  async function updateRanking(req, res) {
    try {
      const { player, ranking } = req.body;
      const updateObject = () => {
        if (player === 'X') {
          return {
            playerX: {
              won: ranking.playerX.won + 1,
              lost: ranking.playerX.lost,
              tied: ranking.playerX.tied,
            },
            playerO: {
              won: ranking.playerO.won,
              lost: ranking.playerO.lost + 1,
              tied: ranking.playerO.tied,
            },
          };
        }
        if (player === 'O') {
          return {
            player0: {
              won: ranking.playerX.won + 1,
              lost: ranking.playerX.lost,
              tied: ranking.playerX.tied,
            },
            playerX: {
              won: ranking.playerO.won,
              lost: ranking.playerO.lost + 1,
              tied: ranking.playerO.tied,
            },
          };
        }
        return {
          player0: {
            won: ranking.playerX.won,
            lost: ranking.playerX.lost,
            tied: ranking.playerX.tied + 1,
          },
          playerX: {
            won: ranking.playerO.won,
            lost: ranking.playerO.lost,
            tied: ranking.playerO.tied + 1,
          },
        };
      };
      const newRanking = await Ranking.findByIdAndUpdate('616d6907d0048d06aa4c1fb3', updateObject(), { new: true });
      res.json(newRanking);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    getWinner,
    getRanking,
    updateRanking,
  };
}
module.exports = GameController;
