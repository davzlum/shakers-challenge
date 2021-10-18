import { combineReducers } from 'redux';
import ranking from './rankingReducer';
import message from './messageReducer';

const rootReducer = combineReducers({
  ranking,
  message,
});

export default rootReducer;
