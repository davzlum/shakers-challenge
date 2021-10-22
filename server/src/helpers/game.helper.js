const winningPositions = require('../const/winningPositions');

const checkForWinner = (newSquares) => {
  let result = {
    isWinner: false,
    isTie: false
  };

  winningPositions.forEach((position) => {
    const [top, center, bottom] = position;
    if (newSquares[top] && newSquares[top] === newSquares[center]
        && newSquares[top] === newSquares[bottom]) {
      result = {
        ...result,
        isWinner: true,
        player: newSquares[top]
      };
    }
  });
  if (!newSquares.includes(null)) {
    result = {
      ...result,
      isTie: true
    };
  }

  return result;
};

const simulate = (actualSquares, playerToCheck) => {
  const fakeSquares = [...actualSquares];
  for (let i = 0; i < actualSquares.length; i += 1) {
    if (!actualSquares[i]) {
      fakeSquares[i] = playerToCheck;
      const result = checkForWinner(fakeSquares);
      if (result.isWinner) {
        return { isWinner: result.isWinner, position: i };
      }
      fakeSquares[i] = null;
    }
  }
  return { isWinner: false, position: null };
};

const autoPlay = (actualSquares) => {
  const newSquares = [...actualSquares];
  const cpuSimulation = simulate(actualSquares, 'O');
  if (cpuSimulation.isWinner) {
    newSquares[cpuSimulation.position] = 'O';
  } else {
    const playerSimulation = simulate(actualSquares, 'X');
    if (playerSimulation.isWinner) {
      newSquares[playerSimulation.position] = 'O';
    } else {
      for (let i = 0; i < actualSquares.length; i += 1) {
        if (!actualSquares[4]) {
          newSquares[4] = 'O';
          break;
        } else if (actualSquares[4] && !actualSquares[i]) {
          newSquares[i] = 'O';
          break;
        }
      }
    }
  }
  return newSquares;
};

module.exports = { checkForWinner, autoPlay };
