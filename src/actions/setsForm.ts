import { WorkoutType } from '../types/workout';
import { SetsFormActionTypes } from '../types/setsForm';
export const OPEN_SETS_ADD_FORM = 'OPEN_SETS_ADD_FORM';
export const OPEN_SETS_UPDATE_FORM = 'OPEN_SETS_UPDATE_FORM';
export const CLOSE_SETS_FORM = 'CLOSE_SETS_FORM';
export const CHANGE_SETS_VALUE = 'CHANGE_SETS_VALUE';

export const openSetsAddForm = (
  workoutData: WorkoutType
): SetsFormActionTypes => {
  return {
    type: OPEN_SETS_ADD_FORM,
    payload: workoutData
  };
};

export const openSetsUpdateForm = (
  index: number,
  workoutData: WorkoutType
): SetsFormActionTypes => {
  return {
    type: OPEN_SETS_UPDATE_FORM,
    payload: {
      index,
      workoutData
    }
  };
};

export const closeSetsForm = (): SetsFormActionTypes => {
  return {
    type: CLOSE_SETS_FORM
  };
};

export const changeSetsValue = (
  name: string,
  value: string
): SetsFormActionTypes => {
  return {
    type: CHANGE_SETS_VALUE,
    payload: {
      name,
      value
    }
  };
};
