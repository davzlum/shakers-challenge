const debug = require('debug')('app:playController');
const { autoPlay } = require('../helpers/game.helper');

function playController() {
  async function getPlay(req, res) {
    try {
      const { actualSquares } = req.body;
      console.log(actualSquares, 'actual');
      const newSquares = autoPlay(actualSquares);
      console.log(newSquares, 'new');
      res.json(newSquares);
    } catch (error) {
      res.status(404);
      res.send(error);
      debug(error);
    }
  }

  return {
    getPlay,
  };
}
module.exports = playController;
