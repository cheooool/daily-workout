import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormGroup,
  TextField,
  Button,
  FormControlLabel,
  Switch
} from '@material-ui/core';
import { WorkoutType } from '../../types/workout';
import { addWorkout } from '../../actions/workout';

interface IWorkoutFormProps {
  open: boolean;
  onClose: () => void;
  addWorkout: (workout: WorkoutType) => void;
}

const initialState = {
  parts: '',
  name: '',
  type: [
    {
      label: 'Weight',
      name: 'weight',
      checked: true
    },
    {
      label: 'Reps',
      name: 'reps',
      checked: true
    },
    {
      label: 'Time',
      name: 'time',
      checked: false
    }
  ]
};

class WorkoutForm extends Component<IWorkoutFormProps> {
  state = initialState;

  handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { type } = this.state;
    const newType = type.map(value => {
      if (value.name === event.target.name) {
        return {
          ...value,
          checked: event.target.checked
        };
      }
      return value;
    });
    this.setState({
      type: [...newType]
    });
  };

  handleClose = () => {
    this.props.onClose();
  };

  handleSubmit = () => {
    const workout: WorkoutType = {
      id: Math.random(),
      ...this.state,
      createdAt: new Date().getTime()
    };

    if (!this.isValid()) {
      return false;
    }

    this.props.addWorkout(workout);
    this.props.onClose();
  };

  isValid = () => {
    const { name, type } = this.state;
    const checkName = name !== '';
    const checkType = type.some(value => value.checked === true);
    if (!checkName || !checkType) {
      return false;
    }
    return true;
  };

  render() {
    const { open } = this.props;
    const { parts, name, type } = this.state;
    return (
      <Dialog open={open} keepMounted onClose={this.handleClose}>
        <DialogTitle>운동 추가</DialogTitle>
        <DialogContent>
          <TextField
            label="부위"
            fullWidth={true}
            name="parts"
            value={parts}
            onChange={this.handleChangeText}
          />
          <TextField
            label="운동"
            fullWidth={true}
            name="name"
            value={name}
            onChange={this.handleChangeText}
          />
          <FormGroup row={false}>
            {type.map((value, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Switch
                      name={value.name}
                      checked={value.checked}
                      onChange={this.handleCheckbox}
                      color="primary"
                    />
                  }
                  label={value.label}
                  value="end"
                  labelPlacement="start"
                  style={{
                    marginLeft: '0px',
                    justifyContent: 'space-between'
                  }}
                />
              );
            })}
          </FormGroup>
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
            추가
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addWorkout: (workout: WorkoutType) => dispatch(addWorkout(workout))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(WorkoutForm);
