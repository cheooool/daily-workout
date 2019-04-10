import { combineReducers } from 'redux';
import workoutReducer from './workoutReducer';
import setsFormReducer from './setsFormReducer';

const rootReducer = combineReducers({
  workoutReducer,
  setsFormReducer
});

export default rootReducer;
