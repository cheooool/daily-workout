import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IRootState } from './types/root';
import { IWorkout } from './types/workout';
import { requestWorkouts } from './actions/workout';
import data from './mock/data';

import WorkoutContainer from './containers/WorkoutContainer';

interface IAppProps {
  workoutList: IWorkout[];
  onRequestWorkouts: (list: IWorkout[]) => any;
}

class App extends Component<IAppProps> {
  componentDidMount() {
    this.props.onRequestWorkouts(data);
  }
  render() {
    const { workoutList } = this.props;
    return (
      <div className="App">
        <WorkoutContainer workoutList={workoutList} />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => {
  return {
    workoutList: state.workoutReducer.workoutList
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onRequestWorkouts: (list: IWorkout[]) => dispatch(requestWorkouts(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
