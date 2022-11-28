import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theAthlete from '../../img/athlete-small.png';
import theRacer from '../../img/theracer-small.png';
import theGoodTimes from '../../img/goodtimes-small.png';
import Movie from './Movie';
const Work = () => {
  return (
    <WorkSection>
      <h1>Our Work</h1>
      <Movie imgSrc={theAthlete} title='The Athlete' />
      <Movie imgSrc={theRacer} title='The Racer' />
      <Movie imgSrc={theGoodTimes} title='The Good Times' />
    </WorkSection>
  );
};

const WorkSection = styled.section`
  min-height: 100vh;
  padding: 40px 96px;
  overflow: hidden;

  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export default Work;
