export type WorkoutType = {
  id?: any;
  parts?: string;
  name: string;
  type: WorkoutCheckboxListType;
  sets?: SetsListType;
  createdAt?: any;
};

export type WorkoutListType = WorkoutType[];

export type WorkoutCheckboxType = {
  label: string;
  name: string;
  checked: boolean;
};

export type WorkoutCheckboxListType = WorkoutCheckboxType[];

export type SetsDataType = {
  [key: string]: any;
};

export type SetsListType = SetsDataType[];

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

export type AddSetsActionType = {
  type: string;
  payload: {
    workoutId: any;
    setsData: SetsDataType;
  };
};

export type UpdateSetsActionType = {
  type: string;
  payload: {
    workoutId: any;
    setsIndex: number;
    setsData: SetsDataType;
  };
};

export type DeleteSetsActionType = {
  type: string;
  payload: {
    workoutId: any;
    setsIndex: number;
  };
};

export type WorkoutActionTypes =
  | AddSetsActionType
  | UpdateSetsActionType
  | DeleteSetsActionType
  | RequestWorkoutActionType
  | AddWorkoutActionType
  | DeleteWorkoutActionType
  | UpdateWorkoutActionType;

export interface IWorkoutState {
  workoutList: WorkoutListType;
}
