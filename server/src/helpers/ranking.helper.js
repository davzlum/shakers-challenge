const updatedObject = (player, ranking) => {
  if (player === 'X') {
    return {
      ...ranking,
      playerX: { ...ranking.playerX, won: ranking.playerX.won + 1 },
      playerO: { ...ranking.playerO, lost: ranking.playerO.lost + 1 }
    };
  }
  if (player === 'O') {
    return {
      ...ranking,
      playerX: { ...ranking.playerX, lost: ranking.playerX.lost + 1 },
      playerO: { ...ranking.playerO, won: ranking.playerO.won + 1 }
    };
  }
  return {
    ...ranking,
    playerX: { ...ranking.playerX, tied: ranking.playerX.tied + 1 },
    playerO: { ...ranking.playerO, tied: ranking.playerO.tied + 1 }
  };
};

module.exports = { updatedObject };
