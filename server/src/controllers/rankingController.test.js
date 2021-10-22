const {
  createRanking,
  updateRanking
} = require('./rankingController')();

const Ranking = require('../model/rankingModel');

jest.mock('./../helpers/ranking.helper.js');
jest.mock('../model/rankingModel');

describe('createRanking', () => {
  test('should create a new ranking game', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = {
      body: null
    };
    // act
    await createRanking(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
  test('should get a error 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = {
      body: null
    };
    Ranking.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });
    await createRanking(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('updateRanking', () => {
  test('should update the ranking with new values', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = {
      body: {
        player: '',
        ranking: {
          _id: ''
        }
      }
    };
      // act
    Ranking.findByIdAndUpdate.mockResolvedValueOnce();
    await updateRanking(req, res);
    // assert
    expect(res.json).toHaveBeenCalled();
  });
  test('should get a error 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };
    const req = {
      body: {
        player: '',
        ranking: {
          _id: null
        }
      }
    };
    Ranking.findByIdAndUpdate.mockRejectedValueOnce('error');
    await updateRanking(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
