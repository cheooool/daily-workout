import React, { FunctionComponent } from 'react';
import Header from '../components/Header/Header';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 56px;
  padding: 1em;
`;

const Template: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
    </>
  );
};

export default Template;
