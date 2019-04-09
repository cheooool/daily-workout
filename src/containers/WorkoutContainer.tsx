import React, { Component } from 'react';
import { IWorkout } from '../types/workout';

import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Template from '../layouts/Template';
import WorkoutList from '../components/Workout/WorkoutList';
import WorkoutForm from '../components/Workout/WorkoutForm';

interface IWorkoutContainerProps {
  workoutList: IWorkout[];
}

class WorkoutContainer extends Component<IWorkoutContainerProps> {
  state = {
    isOpen: false
  };
  handleOpenWorkoutForm = () => {
    this.setState({ isOpen: true });
  };
  handleCloseWorkoutForm = () => {
    this.setState({ isOpen: false });
  };
  render() {
    const { workoutList } = this.props;
    return (
      <Template>
        <WorkoutContainerWrapper>
          <WorkoutList list={workoutList} />
          <AddButton>
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              onClick={this.handleOpenWorkoutForm}
            >
              <Add />
            </Fab>
          </AddButton>
          <WorkoutForm
            open={this.state.isOpen}
            onClose={this.handleCloseWorkoutForm}
          />
        </WorkoutContainerWrapper>
      </Template>
    );
  }
}

const WorkoutContainerWrapper = styled.div`
  margin-bottom: 40px;
`;

const AddButton = styled.div`
  position: fixed;
  bottom: 1em;
  left: 0;
  width: 100%;
  text-align: center;
`;

export default WorkoutContainer;
