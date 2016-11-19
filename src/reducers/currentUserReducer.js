import initialState from './initialState'
export default function currentUserReducer(state=initialState.currentUser, action) {
  switch(action.type) {
    case 'ASSIGN_USERNAME': 
      return action.payload;
    default:
      return state
  }
}