import { IWorkout, IRequestWorkoutAction } from '../types/workout';

export const REQUEST_WORKOUTS = 'GET_WORKOUTS';

export const requestWorkouts = (list: IWorkout[]): IRequestWorkoutAction => {
  return {
    type: REQUEST_WORKOUTS,
    payload: list
  };
};
