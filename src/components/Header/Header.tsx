import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

class Header extends Component {
  render() {
    return (
      <>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" style={{ flexGrow: 1 }}>
              Daily Workout
            </Typography>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Header;
