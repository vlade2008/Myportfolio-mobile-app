import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import reducer from '../reducers';

export default function configureStore(initialState) {

  const composedStore = applyMiddleware(thunk)(createStore);

  const store = composedStore(reducer, initialState);

  return store;
}
