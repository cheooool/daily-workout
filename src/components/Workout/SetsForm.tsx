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

interface ISetsFromProps {
  selectedSetsIndex: number;
  workoutData: WorkoutType;
  formData: SetsDataType;
  isOpen: boolean;
  closeSetsForm: () => void;
  changeSetsValue: (name: string, value: string) => void;
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
    const { selectedSetsIndex } = this.props;

    if (selectedSetsIndex !== -1) {
      // 추가
    } else {
      // 수정
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
          <Button variant="contained" color="primary" fullWidth={true} onClick={this.handleSubmit}>
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
      dispatch(changeSetsValue(name, value))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetsForm);
