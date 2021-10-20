const {
  getPlay,
} = require('./playController')();

describe('getPlay', () => {
  test('should return ia response', async () => {
    // arrange
    const req = {
      body: {
        actualSquares: [
          'O', null, null,
          'O', 'X', 'X',
          null, null, 'X',
        ],
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };
      // act
    await getPlay(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
  test('should get a error 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn(),
    };

    await getPlay(null, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
