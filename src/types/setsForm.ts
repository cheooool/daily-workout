import { WorkoutType, SetsDataType } from './workout';

export type OpenSetsAddFormActionType = {
  type: string;
  payload: WorkoutType;
};

export type OpenSetsUpdateFormActionType = {
  type: string;
  payload: {
    index: number;
    workoutData: WorkoutType;
  };
};

export type CloseSetsFormActionType = {
  type: string;
  payload?: any;
};

export type ChangeSetsValueActionType = {
  type: string;
  payload: {
    name: string;
    value: string;
  };
};

export type SetsFormActionTypes =
  | OpenSetsAddFormActionType
  | OpenSetsUpdateFormActionType
  | CloseSetsFormActionType
  | ChangeSetsValueActionType;

export interface ISetsFormState {
  selectedSetsIndex: number;
  workoutData: WorkoutType;
  formData: SetsDataType;
  isOpen: boolean;
}
