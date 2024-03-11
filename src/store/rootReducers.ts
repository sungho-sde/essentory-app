import {combineReducers} from 'redux';
import routes from './routes/reducers';
import auth from './auth/reducers';

const rootReducers = combineReducers({
  auth,
  routes,
});

export default rootReducers;
