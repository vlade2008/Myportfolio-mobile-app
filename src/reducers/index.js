import { combineReducers } from 'redux';
import profile from './profilereducers'
import mynavreducers from './mynavreducers'

const rootReducer = combineReducers({
  profile,
  nav:mynavreducers
});

export default rootReducer;
