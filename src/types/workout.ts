export interface IWorkout {
  id: any;
  parts?: string;
  name: string;
  type: WorkoutType;
  sets?: SetsType;
  createdAt: any;
}

export type WorkoutType = {
  label: string;
  name: string;
  checked: boolean;
}[];

export type SetsType = {
  [key: string]: any;
}[];

export interface IWorkoutState {
  workoutList: IWorkout[];
}

export interface IRequestWorkoutAction {
  type: string;
  payload: IWorkout[];
}

export type WorkoutActionTypes = IRequestWorkoutAction;
