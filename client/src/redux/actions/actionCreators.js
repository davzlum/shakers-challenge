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

export function updateRanking(player, ranking) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('http://localhost:2025/rankings', { player, ranking });
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
