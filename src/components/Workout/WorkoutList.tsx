import React, { FunctionComponent } from 'react';
import { WorkoutListType, WorkoutType } from '../../types/workout';
import { Typography } from '@material-ui/core';
import Workout from './Workout';

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
    <div>
      {list.map((workout, index) => {
        return (
          <Workout
            key={index}
            data={workout}
            handleOpenUpdateForm={handleOpenUpdateForm}
          />
        );
      })}
    </div>
  );
};

export default WorkoutList;
