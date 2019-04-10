import {
  REQUEST_WORKOUTS,
  ADD_WORKOUT,
  DELETE_WORKOUT,
  UPDATE_WORKOUT,
  ADD_SETS,
  UPDATE_SETS,
  DELETE_SETS
} from '../actions/workout';

import {
  WorkoutActionTypes,
  IWorkoutState,
  WorkoutListType,
  WorkoutType,
  AddSetsActionType,
  UpdateSetsActionType
} from '../types/workout';

const initialState: IWorkoutState = {
  workoutList: []
};

const workoutReducer = (
  state = initialState,
  action: WorkoutActionTypes
): IWorkoutState => {
  let newWorkout: WorkoutType;

  switch (action.type) {
    case REQUEST_WORKOUTS:
      return {
        ...state,
        workoutList: [...(action.payload as WorkoutListType)]
      };
    case ADD_WORKOUT:
      return {
        ...state,
        workoutList: [...state.workoutList, action.payload as WorkoutType]
      };
    case UPDATE_WORKOUT:
      newWorkout = action.payload as WorkoutType;
      return {
        ...state,
        workoutList: [
          ...state.workoutList.map(workout => {
            if (workout.id === newWorkout.id) {
              return newWorkout;
            }
            return workout;
          })
        ]
      };
    case DELETE_WORKOUT:
      return {
        ...state,
        workoutList: [
          ...state.workoutList.filter(
            workout => workout.id !== (action.payload as WorkoutType).id
          )
        ]
      };

    case ADD_SETS:
      return {
        ...state,
        workoutList: [
          ...state.workoutList.map(workout => {
            const {
              workoutId,
              setsData
            } = (action as AddSetsActionType).payload;
            const updateWorkout = { ...workout };
            if (workout.id === workoutId) {
              if (!updateWorkout.sets) {
                updateWorkout['sets'] = [];
              }
              updateWorkout.sets.push(setsData);
              return updateWorkout;
            }
            return workout;
          })
        ]
      };

    case UPDATE_SETS:
      return {
        ...state,
        workoutList: [
          ...state.workoutList.map(workout => {
            const {
              workoutId,
              setsIndex,
              setsData
            } = (action as UpdateSetsActionType).payload;
            const updateWorkout = { ...workout };
            if (workout.id === workoutId) {
              if (updateWorkout.sets) {
                updateWorkout.sets[setsIndex] = setsData;
              }
              return updateWorkout;
            }
            return workout;
          })
        ]
      };

    case DELETE_SETS:
      return {
        ...state,
        workoutList: [
          ...state.workoutList.map(workout => {
            const {
              workoutId,
              setsIndex
            } = (action as UpdateSetsActionType).payload;
            const updateWorkout = { ...workout };
            if (workout.id === workoutId) {
              if (updateWorkout.sets) {
                updateWorkout.sets = updateWorkout.sets.filter(
                  (value, index) => index !== setsIndex
                );
              }
              return updateWorkout;
            }
            return workout;
          })
        ]
      };
    default:
      return state;
  }
};

export default workoutReducer;
