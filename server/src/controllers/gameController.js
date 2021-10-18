const debug = require('debug')('app:gameController');
const winningPositions = require('../const/winningPositions');
const Result = require('../model/resultModel');

function GameController() {
  async function checkForWinner(req, res) {
    try {
      let result = {
        isWinner: false,
        isTie: false,
        player: '',
      };
      const { newSquares } = req.body;
      winningPositions.forEach((position) => {
        const [top, center, bottom] = position;
        if (newSquares[top] && newSquares[top] === newSquares[center]
        && newSquares[top] === newSquares[bottom]) {
          result = {
            isWinner: true,
            isTie: false,
            player: newSquares[top],
          };
        }
      });
      if (!newSquares.includes(null)) {
        result = {
          isWinner: false,
          isTie: true,
          player: '',
        };
      }
      const resultData = await Result.findByIdAndUpdate(
        '616d3855d0048d06aa4c1f92', { $set: result }, { new: true },
      );
      res.json(resultData);
    } catch (error) {
      res.status(404);
      res.send(error);
      debug(error);
    }
  }
  return {
    checkForWinner,
  };
}
module.exports = GameController;