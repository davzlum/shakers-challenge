const debug = require('debug')('app:gameController');
const { checkForWinner } = require('../helpers/game.helper');

function gameController() {
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

  return {
    getWinner
  };
}
module.exports = gameController;
