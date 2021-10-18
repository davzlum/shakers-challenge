import axios from 'axios';
import actionTypes from './actionTypes';

export function loadRanking() {
  return async (dispatch) => {
    try {
      const { data } = await axios('http://localhost:2025/rankings');
      dispatch({
        type: actionTypes.LOAD_RANKING,
        ranking: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_RANKING_ERROR,
      });
    }
  };
}

export function updateRanking(player) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put('http://localhost:2025/rankings', { player });
      dispatch({
        type: actionTypes.UPDATE_RANKING,
        ranking: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_RANKING_ERROR,
      });
    }
  };
}
