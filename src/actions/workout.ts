import { WorkoutListType, RequestWorkoutActionType } from '../types/workout';

export const REQUEST_WORKOUTS = 'GET_WORKOUTS';

export const requestWorkouts = (
  list: WorkoutListType
): RequestWorkoutActionType => {
  return {
    type: REQUEST_WORKOUTS,
    payload: list
  };
};
