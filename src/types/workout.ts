export type WorkoutType = {
  id?: any;
  parts?: string;
  name: string;
  type: WorkoutCheckboxListType;
  sets?: SetsType;
  createdAt?: any;
};

export type WorkoutListType = WorkoutType[];

export type WorkoutCheckboxType = {
  label: string;
  name: string;
  checked: boolean;
};

export type WorkoutCheckboxListType = WorkoutCheckboxType[];

export type SetsType = {
  [key: string]: any;
}[];

export type RequestWorkoutActionType = {
  type: string;
  payload: WorkoutListType;
};

export type AddWorkoutActionType = {
  type: string;
  payload: WorkoutType;
};

export type DeleteWorkoutActionType = {
  type: string;
  payload: WorkoutType;
};

export type UpdateWorkoutActionType = {
  type: string;
  payload: WorkoutType;
};

export type WorkoutActionTypes =
  | RequestWorkoutActionType
  | AddWorkoutActionType
  | DeleteWorkoutActionType
  | UpdateWorkoutActionType;

export interface IWorkoutState {
  workoutList: WorkoutListType;
}
