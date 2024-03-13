import {combineReducers} from 'redux';
import routes from './routes/reducers';
import auth from './auth/reducers';
import layouts from './layouts/reducers';

const rootReducers = combineReducers({
  auth,
  routes,
  layouts,
});

export default rootReducers;
