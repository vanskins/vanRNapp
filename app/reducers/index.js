import { combineReducers } from 'redux';
import users from './Users/Reducer';


const reducers = combineReducers({
  users,
});

export default reducers;
