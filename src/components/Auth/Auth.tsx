import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

const Form = styled.form`
  max-width: 320px;
  margin: 0 auto;
  padding: 2em 1em;
  background: transparent;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 2px;
  text-align: center;
`;

const FormField = styled.div`
  margin: 1em;
`;

const Login = () => {
  return (
    <Form>
      <Typography variant="title">Login</Typography>
      <FormField>
        <TextField label="Email" type="text" fullWidth={true} />
      </FormField>
      <FormField>
        <TextField label="Password" type="password" fullWidth={true} />
      </FormField>
      <FormField>
        <Button variant="contained" fullWidth={true} color="primary">
          Sign In
        </Button>
      </FormField>
      <Typography>
        Don't have an account? <a href="#">Sign Up</a>
      </Typography>
    </Form>
  );
};

const Register = () => {
  return (
    <Form>
      <Typography variant="title">Register</Typography>
      <FormField>
        <TextField label="Email" type="text" fullWidth={true} />
      </FormField>
      <FormField>
        <TextField label="Password" type="password" fullWidth={true} />
      </FormField>
      <FormField>
        <TextField label="Confirm Password" type="password" fullWidth={true} />
      </FormField>
      <FormField>
        <Button variant="contained" fullWidth={true} color="primary">
          Sign Up
        </Button>
      </FormField>
      <Typography>
        Have an account? <a href="#">Sign In</a>
      </Typography>
    </Form>
  );
};

class Auth extends Component {
  render() {
    return (
      <>
        <Login />
        <Register />
      </>
    );
  }
}

export default Auth;
