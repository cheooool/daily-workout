import {
  REQUEST_WORKOUTS,
  ADD_WORKOUT,
  DELETE_WORKOUT,
  UPDATE_WORKOUT
} from '../actions/workout';

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
  let newWorkout: WorkoutType;
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
    case UPDATE_WORKOUT:
      newWorkout = action.payload as WorkoutType;
      return {
        ...state,
        workoutList: [
          ...state.workoutList.map(workout => {
            if (workout.id === newWorkout.id) {
              return newWorkout;
            }
            return workout;
          })
        ]
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workoutList: [
          ...state.workoutList.filter(
            workout => workout.id !== (action.payload as WorkoutType).id
          )
        ]
      };
    default:
      return state;
  }
};

export default workoutReducer;
