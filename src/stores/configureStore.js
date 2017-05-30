import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import thunk from 'redux-thunk';
import reducer from '../reducers';
import devTools from 'remote-redux-devtools';

export default function configureStore(initialState) {

  const composedStore = applyMiddleware(thunk)(createStore);

  const store = composedStore(reducer, initialState);
devTools.updateStore(store);

  return store;
}
