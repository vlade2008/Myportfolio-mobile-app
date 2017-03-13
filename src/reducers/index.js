import { combineReducers } from 'redux';
import routes from './routes';
import profile from './profilereducers'

const rootReducer = combineReducers({
  routes,
  profile
});

export default rootReducer;
