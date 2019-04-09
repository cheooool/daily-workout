import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Modal,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

const WorkoutFormBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 480px;
  padding: 1em;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
`;

class WorkoutForm extends Component {
  render() {
    return (
      <Modal open={false}>
        <WorkoutFormBox>
          <Typography variant="title">운동 추가</Typography>
          <TextField label="부위" fullWidth={true} />
          <TextField label="운동" fullWidth={true} />
          <FormControlLabel
            control={<Checkbox value="weight" />}
            label="weight"
          />
          <FormControlLabel control={<Checkbox value="reps" />} label="reps" />
          <ButtonGroup>
            <Button color="secondary" fullWidth={true}>
              취소
            </Button>
            <Button variant="contained" color="primary" fullWidth={true}>
              추가
            </Button>
          </ButtonGroup>
        </WorkoutFormBox>
      </Modal>
    );
  }
}

export default WorkoutForm;
