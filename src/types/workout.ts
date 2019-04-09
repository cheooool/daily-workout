export interface IWorkout {
  id: any;
  parts?: string;
  name: string;
  type: string[];
  sets: {
    [key: string]: any;
  }[];
  createdAt: any;
}

export interface IWorkoutState {
  workoutList: IWorkout[];
}

export interface IRequestWorkoutAction {
  type: string;
  payload: IWorkout[];
}

export type WorkoutActionTypes = IRequestWorkoutAction;
