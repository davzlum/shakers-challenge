const debug = require('debug')('app:rankingController');
const Ranking = require('../model/rankingModel');
const { updatedObject } = require('../helpers/ranking.helper');

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
      const newRanking = await Ranking
        .findByIdAndUpdate(ranking._id, updatedObject(player, ranking), { new: true });
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
