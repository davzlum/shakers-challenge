import axios from 'axios';
import actionTypes from './actionTypes';

const url = process.env.REACT_APP_URL;

export function createRanking() {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${url}/rankings`);
      dispatch({
        type: actionTypes.CREATE_RANKING,
        ranking: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_RANKING_ERROR
      });
    }
  };
}

export function updateRanking(player, ranking) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`${url}/rankings`, { player, ranking });
      dispatch({
        type: actionTypes.UPDATE_RANKING,
        ranking: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_RANKING_ERROR
      });
    }
  };
}

export function handleError(errorMessage) {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.COMMON_ERROR,
      message: { errorMessage, isError: true }
    });
  };
}
