import actionTypes from '../actions/actionTypes';

function messageReducer(message = {}, action) {
  switch (action.type) {
    case actionTypes.COMMON_ERROR:
      return action.message;
    default:
      return message;
  }
}

export default messageReducer;
