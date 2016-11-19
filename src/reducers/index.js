import {combineReducers} from 'redux';
import challenges from './challengesReducer';
import currentUser from './currentUserReducer';

const rootReducer = combineReducers({
  currentUser,
  challenges
})

export default rootReducer;