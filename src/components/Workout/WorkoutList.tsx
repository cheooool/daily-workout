import React, { Component } from 'react';
import Workout from './Workout';
import { WorkoutListType } from '../../types/workout';

interface IWorkoutListProps {
  list: WorkoutListType;
}

class WorkoutList extends Component<IWorkoutListProps> {
  render() {
    const { list } = this.props;
    return (
      <div>
        {list.map((workout, index) => {
          return <Workout key={index} data={workout} />;
        })}
      </div>
    );
  }
}

export default WorkoutList;
