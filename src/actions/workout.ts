import { WorkoutList, RequestWorkoutActionType } from '../types/workout';

export const REQUEST_WORKOUTS = 'GET_WORKOUTS';

export const requestWorkouts = (
  list: WorkoutList
): RequestWorkoutActionType => {
  return {
    type: REQUEST_WORKOUTS,
    payload: list
  };
};
