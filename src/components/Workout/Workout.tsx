import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import { WorkoutType } from '../../types/workout';

import Sets from './Sets';

interface IWorkoutProps {
  data: WorkoutType;
}

const Workout: FunctionComponent<IWorkoutProps> = ({ data }) => {
  return (
    <WorkoutWrapper>
      <WorkoutHeader>
        <Typography variant="headline">{data.parts || '기타'}</Typography>
        <Typography variant="title">{data.name}</Typography>
      </WorkoutHeader>
      <hr />
      <Sets type={data.type} data={data.sets || []} />
    </WorkoutWrapper>
  );
};

const WorkoutWrapper = styled.div`
  padding: 1em;
`;
const WorkoutHeader = styled.div`
  display: flex;
  align-items: center;
  line-height: 1em;
`;

export default Workout;
