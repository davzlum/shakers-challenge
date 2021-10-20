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

// const simulate = (actualSquares, playerToCheck) => {
//   const fakeSquares = [...actualSquares];
//   for (let i = 0; i < actualSquares.length; i += 1) {
//     if (!actualSquares[i]) {
//       fakeSquares[i] = playerToCheck;
//       const result = checkForWinner(fakeSquares);
//       if (result.isWinner) {
//         return { isWinner: result.isWinner, position: i };
//       }
//       fakeSquares[i] = null;
//     }
//   }
// };

const autoPlay = (actualSquares) => {
  const newSquares = [...actualSquares];

  let isCpuWinner = false;
  let isPlayerWinner = false;

  for (let i = 0; i < actualSquares.length; i += 1) {
    if (!actualSquares[i]) {
      newSquares[i] = 'O';
      const result = checkForWinner(newSquares);
      if (result.isWinner) {
        isCpuWinner = true;
        break;
      } else {
        newSquares[i] = null;
      }
    }
  }
  // const cpuSimulation = simulate(actualSquares, 'O');
  // const playerSimulation = simulate(actualSquares, 'X');

  // if (cpuSimulation.isWinner) {
  //   newSquares[cpuSimulation.position] = 'O';
  // }

  if (!isCpuWinner) {
    // newSquares[playerSimulation.position] = 'O';
    for (let i = 0; i < actualSquares.length; i += 1) {
      if (!actualSquares[i]) {
        newSquares[i] = 'X';
        const result = checkForWinner(newSquares);
        if (result.isWinner) {
          isPlayerWinner = true;
          newSquares[i] = 'O';
          break;
        } else {
          newSquares[i] = null;
        }
      }
    }
  }
  if (!isCpuWinner && !isPlayerWinner) {
    // newSquares[cpuSimulation.position] = 'O';
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

  return newSquares;
};

module.exports = { checkForWinner, autoPlay };
