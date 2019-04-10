import React, { Component, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormGroup,
  FormControlLabel,
  DialogActions,
  Switch,
  Button
} from '@material-ui/core';
import { IRootState } from '../../types/root';
import { WorkoutType, SetsDataType } from '../../types/workout';
import { closeSetsForm, changeSetsValue } from '../../actions/setsForm';
import { addSets, updateSets } from '../../actions/workout';

interface ISetsFromProps {
  selectedSetsIndex: number;
  workoutData: WorkoutType;
  formData: SetsDataType;
  isOpen: boolean;
  closeSetsForm: () => void;
  changeSetsValue: (name: string, value: string) => void;
  addSets: (workoutId: any, setsData: SetsDataType) => void;
  updateSets: (
    workoutId: any,
    setsIndex: number,
    setsData: SetsDataType
  ) => void;
}

interface ISetsFromTitleProps {
  index: number;
  name: string;
  count: number;
}
const SetsFormTitle: FunctionComponent<ISetsFromTitleProps> = ({
  index,
  name,
  count
}) => {
  if (index !== -1) {
    return (
      <DialogTitle>
        {name} - {index + 1} 세트
      </DialogTitle>
    );
  }

  return (
    <DialogTitle>
      {name} - {count} Sets
    </DialogTitle>
  );
};

class SetsForm extends Component<ISetsFromProps> {
  handleClose = () => {
    this.props.closeSetsForm();
  };
  handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.props.changeSetsValue(name, value);
  };
  handleSubmit = () => {
    const {
      selectedSetsIndex,
      workoutData: { id },
      formData
    } = this.props;

    if (selectedSetsIndex !== -1) {
      // 수정
      this.props.updateSets(id, selectedSetsIndex, formData);
      this.handleClose();
    } else {
      // 추가
      this.props.addSets(id, formData);
      this.handleClose();
    }
  };
  render() {
    const { selectedSetsIndex, workoutData, isOpen } = this.props;
    const { name, sets, type } = workoutData;
    return (
      <Dialog open={isOpen} onClose={this.handleClose}>
        <SetsFormTitle
          index={selectedSetsIndex}
          name={name}
          count={sets && sets.length ? sets.length + 1 : 1}
        />

        <DialogContent>
          {type &&
            type.map((value, index) => {
              if (!value.checked) {
                return null;
              }
              return (
                <TextField
                  key={index}
                  type="number"
                  label={value.label}
                  fullWidth={true}
                  name={value.name}
                  onChange={this.handleChangeValue}
                />
              );
            })}
        </DialogContent>
        <DialogActions>
          <Button color="secondary" fullWidth={true} onClick={this.handleClose}>
            취소
          </Button>
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            onClick={this.handleSubmit}
          >
            {selectedSetsIndex !== -1 ? '수정' : '추가'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  const {
    isOpen,
    workoutData,
    formData,
    selectedSetsIndex
  } = state.setsFormReducer;
  return {
    isOpen,
    workoutData,
    formData,
    selectedSetsIndex
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    closeSetsForm: () => dispatch(closeSetsForm()),
    changeSetsValue: (name: string, value: string) =>
      dispatch(changeSetsValue(name, value)),
    addSets: (workoutId: any, setsData: SetsDataType) =>
      dispatch(addSets(workoutId, setsData)),
    updateSets: (workoutId: any, setsIndex: number, setsData: SetsDataType) =>
      dispatch(updateSets(workoutId, setsIndex, setsData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetsForm);
