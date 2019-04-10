import { ISetsFormState, SetsFormActionTypes } from '../types/setsForm';
import {
  OPEN_SETS_ADD_FORM,
  OPEN_SETS_UPDATE_FORM,
  CLOSE_SETS_FORM,
  CHANGE_SETS_VALUE
} from '../actions/setsForm';
import { WorkoutType, SetsDataType, SetsListType } from '../types/workout';

const initialState: ISetsFormState = {
  selectedSetsIndex: -1,
  workoutData: {} as WorkoutType,
  formData: {},
  isOpen: false
};

const createTypeToFormData = (type: SetsListType): SetsDataType => {
  const result: SetsDataType = {};
  type.forEach(value => {
    if (value.checked) {
      result[value.name] = '';
    }
  });
  return result;
};

const setsFormReducer = (
  state = initialState,
  action: SetsFormActionTypes
): ISetsFormState => {
  let workoutData: WorkoutType;
  let formData: SetsDataType;
  switch (action.type) {
    case OPEN_SETS_ADD_FORM:
      workoutData = action.payload;
      formData = createTypeToFormData(workoutData.type);

      return {
        selectedSetsIndex: -1,
        workoutData,
        formData,
        isOpen: true
      };
    case OPEN_SETS_UPDATE_FORM:
      const selectedIdx = action.payload.index;
      workoutData = action.payload.workoutData;
      formData = workoutData.sets ? workoutData.sets[selectedIdx] : {};

      return {
        selectedSetsIndex: action.payload.index,
        workoutData,
        formData,
        isOpen: true
      };
    case CLOSE_SETS_FORM:
      return {
        ...state,
        isOpen: false
      };
    case CHANGE_SETS_VALUE:
      formData = state.formData;
      formData[action.payload.name] = action.payload.value;
      return {
        ...state,
        formData
      };
    default:
      return state;
  }
};

export default setsFormReducer;
