import { combineReducers } from 'redux';
import rankingReducer from './rankingReducer';

const rootReducer = combineReducers({
  rankingReducer,
});

export default rootReducer;
