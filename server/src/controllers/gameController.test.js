const {
  getWinner,
} = require('./gameController')();

describe('getWinner', () => {
  test('should check board and return a winner', async () => {
    // arrange
    const req = {
      body: {
        newSquares: [
          'O', 'X', 'O',
          'O', 'X', 'X',
          'X', 'O', 'X',
        ],
      },
    };
    const res = {
      json: jest.fn().mockResolvedValueOnce({ isWinner: false, isTie: true }),
      status: jest.fn(),
      send: jest.fn(),
    };
    // act
    await getWinner(req, res);
    // assert
    expect(res.json).toHaveBeenCalledWith({ isWinner: false, isTie: true });
  });
  test('should get a error 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    await getWinner(null, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
