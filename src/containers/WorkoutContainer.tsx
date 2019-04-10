import React, { Component } from 'react';
import { WorkoutListType, WorkoutType } from '../types/workout';

import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import { Add } from '@material-ui/icons';

import Template from '../layouts/Template';
import WorkoutList from '../components/Workout/WorkoutList';
import WorkoutForm from '../components/Workout/WorkoutForm';
import SetsForm from '../components/Workout/SetsForm';

interface IWorkoutContainerProps {
  workoutList: WorkoutListType;
}

class WorkoutContainer extends Component<IWorkoutContainerProps> {
  state = {
    isOpen: false,
    formData: null
  };
  handleOpenAddForm = () => {
    this.setState({ isOpen: true });
  };
  handleOpenUpdateForm = (workout: WorkoutType) => {
    this.setState({
      isOpen: true,
      formData: workout
    });
  };
  handleCloseWorkoutForm = () => {
    this.setState({ isOpen: false, formData: null });
  };
  render() {
    const { workoutList } = this.props;
    return (
      <Template>
        <WorkoutContainerWrapper>
          <WorkoutList
            list={workoutList}
            handleOpenUpdateForm={this.handleOpenUpdateForm}
          />
          <AddButton>
            <Fab
              size="small"
              color="primary"
              aria-label="Add"
              onClick={this.handleOpenAddForm}
            >
              <Add />
            </Fab>
          </AddButton>
          <WorkoutForm
            open={this.state.isOpen}
            onClose={this.handleCloseWorkoutForm}
            formData={this.state.formData}
          />
          <SetsForm />
        </WorkoutContainerWrapper>
      </Template>
    );
  }
}

const WorkoutContainerWrapper = styled.div`
  margin-bottom: 4em;
`;

const AddButton = styled.div`
  position: fixed;
  bottom: 1em;
  left: 0;
  width: 100%;
  text-align: center;
`;

export default WorkoutContainer;
