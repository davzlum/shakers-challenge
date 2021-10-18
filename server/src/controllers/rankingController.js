const debug = require('debug')('app:rankingController');
const Ranking = require('../model/rankingModel');

function rankingController() {
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
            ...ranking,
            playerX: { ...ranking.playerX, won: ranking.playerX.won + 1 },
            playerO: { ...ranking.playerO, lost: ranking.playerO.lost + 1 },
          };
        }
        if (player === 'O') {
          return {
            ...ranking,
            playerX: { ...ranking.playerX, lost: ranking.playerX.lost + 1 },
            playerO: { ...ranking.playerO, won: ranking.playerO.won + 1 },
          };
        }
        return {
          ...ranking,
          playerX: { ...ranking.playerX, tied: ranking.playerX.tied + 1 },
          playerO: { ...ranking.playerO, tied: ranking.playerO.tied + 1 },
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
    getRanking,
    updateRanking,
  };
}

module.exports = rankingController;
