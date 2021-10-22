const {
  updatedObject
} = require('./ranking.helper');

describe('Given an updatedObject function', () => {
  const ranking = {
    playerX: { won: 0, lost: 0, tied: 0 },
    playerO: { won: 0, lost: 0, tied: 0 }
  };
  test('if player X wins should update won property from player X', () => {
    const player = 'X';
    const object = updatedObject(player, ranking);
    const expected = {
      playerX: { won: 1, lost: 0, tied: 0 },
      playerO: { won: 0, lost: 1, tied: 0 }
    };
    expect(object).toEqual(expected);
  });
  test('if player O wins should update lost property from player X', () => {
    const player = 'O';
    const object = updatedObject(player, ranking);
    const expected = {
      playerX: { won: 0, lost: 1, tied: 0 },
      playerO: { won: 1, lost: 0, tied: 0 }
    };
    expect(object).toEqual(expected);
  });
  test('if nobody wins tied property must be updated', () => {
    const player = '';
    const object = updatedObject(player, ranking);
    const expected = {
      playerX: { won: 0, lost: 0, tied: 1 },
      playerO: { won: 0, lost: 0, tied: 1 }
    };
    expect(object).toEqual(expected);
  });
});
