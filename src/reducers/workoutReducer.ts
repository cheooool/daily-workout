import { REQUEST_WORKOUTS, ADD_WORKOUT } from '../actions/workout';

import {
  WorkoutActionTypes,
  IWorkoutState,
  WorkoutListType,
  WorkoutType
} from '../types/workout';

const initialState: IWorkoutState = {
  workoutList: []
};

const workoutReducer = (
  state = initialState,
  action: WorkoutActionTypes
): IWorkoutState => {
  switch (action.type) {
    case REQUEST_WORKOUTS:
      return {
        ...state,
        workoutList: [...(action.payload as WorkoutListType)]
      };
    case ADD_WORKOUT:
      return {
        ...state,
        workoutList: [...state.workoutList, action.payload as WorkoutType]
      };
    default:
      return state;
  }
};

export default workoutReducer;
