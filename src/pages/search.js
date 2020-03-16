import React, { Fragment } from 'react';
import posed from 'react-pose';
//import {Container} from 'react-bootstrap';
import SearchResults from '../components/seach';

const Container = posed.div({
  enter: { staggerChildren: 50 }
});

// const P = posed.OtherResults({
//   enter: { x: 0, opacity: 1 },
//   exit: { x: 50, opacity: 0 }
// });

export default (props) => (
  <Container>
    <SearchResults datatodisplay={props.data}/>
  </Container>
);
