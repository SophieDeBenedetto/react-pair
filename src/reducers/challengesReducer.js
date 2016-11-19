import initialState from './initialState'

export default function challengesReducer(state=initialState.challenges, action) {
  switch(action.type) {
    case 'GET_CHALLENGES':
      return action.payload; 
    default: 
      return state;
  }
}