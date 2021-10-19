const debug = require('debug')('app:rankingController');
const Ranking = require('../model/rankingModel');

function rankingController() {
  async function createRanking(req, res) {
    const newRanking = new Ranking(
      {
        playerX: {
          won: 0,
          lost: 0,
          tied: 0,
        },
        playerO: {
          won: 0,
          lost: 0,
          tied: 0,
        },
      },
    );
    try {
      await newRanking.save();
      res.json(newRanking);
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
      const newRanking = await Ranking
        .findByIdAndUpdate(ranking._id, updateObject(), { new: true });
      res.json(newRanking);
    } catch (error) {
      debug(error);
      res.send(error);
      res.status(404);
    }
  }

  return {
    createRanking,
    updateRanking,
  };
}

module.exports = rankingController;
