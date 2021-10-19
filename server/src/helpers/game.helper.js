const winningPositions = require('../const/winningPositions');

const checkForWinner = (newSquares) => {
  let result = {
    isWinner: false,
    isTie: false,
  };

  winningPositions.forEach((position) => {
    const [top, center, bottom] = position;
    if (newSquares[top] && newSquares[top] === newSquares[center]
        && newSquares[top] === newSquares[bottom]) {
      result = {
        ...result,
        isWinner: true,
        player: newSquares[top],
      };
    }
  });
  if (!newSquares.includes(null)) {
    result = {
      ...result,
      isTie: true,
    };
  }

  return result;
};

module.exports = { checkForWinner };
