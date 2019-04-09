import { REQUEST_WORKOUTS } from '../actions/workout';

import { WorkoutActionTypes, IWorkoutState } from '../types/workout';

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
        workoutList: [...action.payload]
      };
    default:
      return state;
  }
};

export default workoutReducer;
