import {combineReducers} from 'redux';
import challenges from './challengesReducer';
// import session from './sessionReducer';

const rootReducer = combineReducers({
  // short hand property names
  challenges
})

export default rootReducer;