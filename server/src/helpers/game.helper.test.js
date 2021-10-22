const {
  autoPlay
} = require('./game.helper');

describe('Given an autoPlay function', () => {
  let actualSquares = [
    'O', null, null,
    null, 'X', null,
    null, null, null
  ];
  test('if cpu can not win the game', () => {
    const newBoard = autoPlay(actualSquares);
    const expected = [
      'O', 'O', null,
      null, 'X', null,
      null, null, null
    ];
    expect(newBoard).toEqual(expected);
  });
  test('if cpu can not win the game and player either', () => {
    const newBoard = autoPlay(actualSquares);
    const expected = [
      'O', 'O', null,
      null, 'X', null,
      null, null, null
    ];
    expect(newBoard).toEqual(expected);
  });
  test('and there are no player on center', () => {
    actualSquares = [
      'O', 'X', null,
      null, null, null,
      null, null, null
    ];
    const newBoard = autoPlay(actualSquares);
    const expected = [
      'O', 'X', null,
      null, 'O', null,
      null, null, null
    ];
    expect(newBoard).toEqual(expected);
  });
});
