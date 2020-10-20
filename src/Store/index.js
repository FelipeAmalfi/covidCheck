import {combineReducers} from 'redux';
import epiReducer from './Reducer/epiReducer';

const appReducer = combineReducers({
  epi: epiReducer,
});

export default appReducer;
