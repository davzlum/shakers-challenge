import actionTypes from '../actions/actionTypes';

function rankingReducer(ranking = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_RANKING:
      return action.ranking;

    case actionTypes.UPDATE_RANKING:
      return action.ranking;

    default:
      return ranking;
  }
}

export default rankingReducer;
