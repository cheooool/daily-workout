import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Fade
} from '@material-ui/core';
import { MoreVert, Edit, Delete } from '@material-ui/icons';
import { WorkoutType } from '../../types/workout';

import Sets from './Sets';
import { deleteWorkout } from '../../actions/workout';
import { openSetsAddForm, openSetsUpdateForm } from '../../actions/setsForm';

interface IWorkoutProps {
  data: WorkoutType;
  deleteWorkout: (workout: WorkoutType) => void;
  openSetsAddForm: (workout: WorkoutType) => void;
  openSetsUpdateForm: (selectedIndex: number, workout: WorkoutType) => void;
  handleOpenUpdateForm: (workout: WorkoutType) => void;
}

class Workout extends Component<IWorkoutProps> {
  state = {
    anchorEl: null
  };

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  handleEdit = () => {
    this.handleClose();
    this.props.handleOpenUpdateForm(this.props.data);
  };

  handleDelete = () => {
    if (confirm(`${this.props.data.name}을 삭제하시겠습니까?`)) {
      this.props.deleteWorkout(this.props.data);
    }
    this.handleClose();
  };

  handleOpenSetsAddForm = () => {
    this.props.openSetsAddForm(this.props.data);
  };

  handleOpenSetsUpdateForm = (selectedIndex: number) => {
    this.props.openSetsUpdateForm(selectedIndex, this.props.data);
  };

  render() {
    const { data } = this.props;
    const { anchorEl } = this.state;
    const open = !!anchorEl;

    return (
      <>
        <WorkoutHeader>
          <span>{data.parts || '기타'}</span>
          <WorkoutName>{data.name}</WorkoutName>
          <IconButton
            color="inherit"
            onClick={this.handleClick}
            style={{ marginRight: '-12px' }}
          >
            <MoreVert />
          </IconButton>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem
              onClick={this.handleEdit}
              disabled={data.sets && data.sets.length > 0}
            >
              <ListItemIcon>
                <Edit color="primary" />
              </ListItemIcon>
              <Typography variant="body1">Edit</Typography>
            </MenuItem>
            <MenuItem onClick={this.handleDelete}>
              <ListItemIcon>
                <Delete color="secondary" />
              </ListItemIcon>
              <Typography variant="body1">Delete</Typography>
            </MenuItem>
          </Menu>
        </WorkoutHeader>
        <Sets
          type={data.type}
          data={data.sets || []}
          handleOpenSetsAddForm={this.handleOpenSetsAddForm}
          handleOpenSetsUpdateForm={this.handleOpenSetsUpdateForm}
        />
      </>
    );
  }
}
const WorkoutHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WorkoutName = styled.strong`
  padding: 0 1em;
`;

const mapDispatchToProps = (dispatch: any) => {
  return {
    deleteWorkout: (workout: WorkoutType) => dispatch(deleteWorkout(workout)),
    openSetsAddForm: (workout: WorkoutType) =>
      dispatch(openSetsAddForm(workout)),
    openSetsUpdateForm: (selectedIndex: number, workout: WorkoutType) =>
      dispatch(openSetsUpdateForm(selectedIndex, workout))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Workout);
