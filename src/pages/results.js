import React, { Fragment } from 'react';
import posed from 'react-pose';
import Results from '../components/results'

const Container = posed.div({
  enter: { staggerChildren: 50 }
});



export default () => (
  <Container>
    <Results />
  </Container>
);
