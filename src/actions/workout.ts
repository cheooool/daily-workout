import {
  WorkoutListType,
  WorkoutType,
  WorkoutActionTypes
} from '../types/workout';

export const REQUEST_WORKOUTS = 'GET_WORKOUTS';
export const ADD_WORKOUT = 'ADD_WORKOUT';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';
export const UPDATE_WORKOUT = 'UPDATE_WORKOUT';

export const requestWorkouts = (list: WorkoutListType): WorkoutActionTypes => {
  return {
    type: REQUEST_WORKOUTS,
    payload: list
  };
};

export const addWorkout = (workout: WorkoutType): WorkoutActionTypes => {
  return {
    type: ADD_WORKOUT,
    payload: workout
  };
};

export const deleteWorkout = (workout: WorkoutType): WorkoutActionTypes => {
  return {
    type: DELETE_WORKOUT,
    payload: workout
  };
};

export const updateWorkout = (workout: WorkoutType): WorkoutActionTypes => {
  return {
    type: UPDATE_WORKOUT,
    payload: workout
  };
};
