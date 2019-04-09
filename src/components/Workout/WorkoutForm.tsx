import React, { Component } from 'react';
import styled from 'styled-components';
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

interface IWorkoutFormProps {
  open: boolean;
  onClose: () => void;
}

class WorkoutForm extends Component<IWorkoutFormProps> {
  state = {
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

  render() {
    const { open, onClose } = this.props;
    const { parts, name, type } = this.state;
    return (
      <Dialog open={open} keepMounted onClose={onClose}>
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
                    // <Checkbox
                    //   name={value.name}
                    //   checked={value.checked}
                    //   onChange={this.handleCheckbox}
                    // />
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
          <Button color="secondary" fullWidth={true} onClick={onClose}>
            취소
          </Button>
          <Button variant="contained" color="primary" fullWidth={true}>
            추가
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default WorkoutForm;
