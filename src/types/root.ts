import { IWorkoutState } from './workout';
import { ISetsFormState } from './setsForm';

export interface IRootState {
  workoutReducer: IWorkoutState;
  setsFormReducer: ISetsFormState;
}
