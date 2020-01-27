import React from 'react';

import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default function HomePage() {
  return (
    <Container
      maxWidth='lg'
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '10vh 32px'
      }}
    >
      <Typography variant='h4'>
        Orlando Ureta
      </Typography>
      <br />
      <Typography variant='h5'>
        A JavaScript Developer with more than 12 years of professional experience.
      </Typography>
      <br />
      <Typography variant='h5'>
        He can develop modern Web and Mobile applications using proven technologies like JavaScript, React, React Native, Redux, Redux Saga, Apollo GraphQL, Meteor, Next, MongoDB, PostgreSQL, Jest, Cypress, Buildkite, Bitrise, Terraform, Docker and Amazon Web Services.
      </Typography>
    </Container>
  );
}
