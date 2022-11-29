import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theAthlete from '../../img/athlete-small.png';
import theRacer from '../../img/theracer-small.png';
import theGoodTimes from '../../img/goodtimes-small.png';
import Movie from './Movie';

const MoviesWork = () => {
  return (
    <Movies>
      <h1>Our Work</h1>
      <Movie imgSrc={theAthlete} title='The Athlete' to='/work/the-athlete' />
      <Movie imgSrc={theRacer} title='The Racer' to='/work/the-racer' />
      <Movie
        imgSrc={theGoodTimes}
        title='The Good Times'
        to='/work/good-times'
      />
    </Movies>
  );
};

const Movies = styled.section`
  min-height: 100vh;
  padding: 40px 96px;
  overflow: hidden;

  h1 {
    font-size: 2.5rem;
    text-align: center;
  }
`;

export default MoviesWork;
