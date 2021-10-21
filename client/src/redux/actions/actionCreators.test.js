import axios from 'axios';
import actionTypes from './actionTypes';
import {
  createRanking,
  handleError,
  updateRanking,
} from './actionCreators';

jest.mock('axios');

describe('createRanking function', () => {
  test('should dispatch CREATE_RANKING', async () => {
    const dispatch = jest.fn();
    const data = { playerX: '' };
    axios.post.mockResolvedValue({ data });
    await createRanking()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.CREATE_RANKING,
      ranking: { playerX: '' },
    });
  });
  test('should dispatch CREATE_RANKING_ERROR', async () => {
    axios.mockRejectedValue();
    const dispatch = jest.fn();
    await createRanking()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.CREATE_RANKING_ERROR,
    });
  });
});

describe('updateRanking function', () => {
  test('should dispatch UPDATE_RANKING', async () => {
    const dispatch = jest.fn();
    const player = 'X';
    const ranking = { playerX: 0 };
    const data = { playerX: 1 };
    axios.put.mockResolvedValue({ data });
    await updateRanking(player, ranking)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_RANKING,
      ranking: { playerX: 1 },
    });
  });
  test('should dispatch UPDATE_RANKING_ERROR', async () => {
    const dispatch = jest.fn();
    axios.put.mockRejectedValue();
    await updateRanking()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.UPDATE_RANKING_ERROR,
    });
  });
});

describe('handleError function', () => {
  test('should dispatch COMMON_ERROR', async () => {
    const dispatch = jest.fn();
    const errorMessage = 'error';
    await handleError(errorMessage)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.COMMON_ERROR,
      message: { errorMessage: 'error', isError: true },
    });
  });
});
