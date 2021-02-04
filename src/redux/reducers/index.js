import {combineReducers} from 'redux';
import missions from './space-missions';
const appReducer = combineReducers(
  Object.assign({
    missions: missions,
  }),
);

export default appReducer;
