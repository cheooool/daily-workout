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
import { addWorkout, updateWorkout } from '../../actions/workout';

interface IWorkoutFormProps {
  open: boolean;
  formData: WorkoutType | null;
  onClose: () => void;
  addWorkout: (workout: WorkoutType) => void;
  updateWorkout: (workout: WorkoutType) => void;
}

const initialState = {
  type: 'add',
  formData: {
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
  }
};

class WorkoutForm extends Component<IWorkoutFormProps> {
  state = initialState;

  static getDerivedStateFromProps(props: any, state: any) {
    if (state.type !== 'update' && props.formData) {
      return {
        type: 'update',
        formData: props.formData
      };
    }
    // when null is returned no update is made to the state
    return null;
  }

  handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [event.target.name]: event.target.value
      }
    });
  };

  handleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      formData: { type }
    } = this.state;
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
      formData: {
        ...this.state.formData,
        type: [...newType]
      }
    });
  };

  handleClose = () => {
    this.props.onClose();
    this.setState(initialState);
  };

  handleSubmit = () => {
    const { type, formData } = this.state;
    const workout: WorkoutType = {
      ...formData
    };

    if (!this.isValid()) {
      return false;
    }

    if (type === 'add') {
      workout['id'] = Math.random();
      workout['createdAt'] = new Date().getTime();
      this.props.addWorkout(workout);
    } else if (type === 'update') {
      this.props.updateWorkout(workout);
    }
    this.handleClose();
  };

  isValid = () => {
    const {
      formData: { name, type }
    } = this.state;
    const checkName = name !== '';
    const checkType = type.some(value => value.checked === true);
    if (!checkName || !checkType) {
      return false;
    }
    return true;
  };

  render() {
    const { open } = this.props;
    const {
      formData: { parts, name, type }
    } = this.state;
    return (
      <Dialog open={open} keepMounted onClose={this.handleClose}>
        <DialogTitle>운동 추가</DialogTitle>
        <DialogContent>
          <TextField
            label="운동부위"
            fullWidth={true}
            name="parts"
            value={parts}
            onChange={this.handleChangeText}
          />
          <TextField
            label="운동명"
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
            disabled={!this.isValid()}
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
    addWorkout: (workout: WorkoutType) => dispatch(addWorkout(workout)),
    updateWorkout: (workout: WorkoutType) => dispatch(updateWorkout(workout))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(WorkoutForm);
