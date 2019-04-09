import React, { Component } from 'react';
import Workout from './Workout';
import { IWorkout } from '../../types/workout';

interface IWorkoutListProps {
  list: IWorkout[];
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
