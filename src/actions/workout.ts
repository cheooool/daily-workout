import {
  WorkoutListType,
  WorkoutType,
  WorkoutActionTypes,
  SetsDataType
} from '../types/workout';

export const REQUEST_WORKOUTS = 'REQUEST_WORKOUTS';
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

export const ADD_SETS = 'ADD_SETS';
export const DELETE_SETS = 'DELETE_SETS';
export const UPDATE_SETS = 'UPDATE_SETS';

export const addSets = (
  workoutId: string,
  setsData: SetsDataType
): WorkoutActionTypes => {
  return {
    type: ADD_SETS,
    payload: {
      workoutId,
      setsData
    }
  };
};

export const deleteSets = (
  workoutId: any,
  setsIndex: number
): WorkoutActionTypes => {
  return {
    type: DELETE_SETS,
    payload: {
      workoutId,
      setsIndex
    }
  };
};

export const updateSets = (
  workoutId: any,
  setsIndex: number,
  setsData: SetsDataType
): WorkoutActionTypes => {
  return {
    type: UPDATE_SETS,
    payload: {
      workoutId,
      setsIndex,
      setsData
    }
  };
};
