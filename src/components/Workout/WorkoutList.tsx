import React, { FunctionComponent } from 'react';
import { WorkoutListType, WorkoutType } from '../../types/workout';
import { Typography } from '@material-ui/core';
import Workout from './Workout';
import styled from 'styled-components';

interface IWorkoutListProps {
  list: WorkoutListType;
  handleOpenUpdateForm: (workout: WorkoutType) => void;
}

const WorkoutList: FunctionComponent<IWorkoutListProps> = ({
  list,
  handleOpenUpdateForm
}) => {
  if (!list.length) {
    return <Typography>등록된 운동이 없습니다.</Typography>;
  }
  return (
    <List>
      {list.map((workout, index) => {
        return (
          <ListItem key={index}>
            <Workout
              data={workout}
              handleOpenUpdateForm={handleOpenUpdateForm}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

const List = styled.ul`
  max-width: 640px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin: 2em 0;

  &:first-child {
    margin-top: 0;
  }
`;

export default WorkoutList;
