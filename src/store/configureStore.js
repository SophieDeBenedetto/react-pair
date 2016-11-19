import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers'
import ReduxPromise from 'redux-promise';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(ReduxPromise)
  );
}