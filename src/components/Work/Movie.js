import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movie = ({ imgSrc, title, to }) => {
  return (
    <StyledMovie>
      <h2>{title}</h2>
      <div className='line'></div>
      <Link to={to}>
        <img src={imgSrc} alt='' />
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled.section`
  padding: 40px 0px;

  .line {
    width: 100%;
    height: 2px;
    background-color: var(--third-color);
    margin-bottom: 24px;
  }

  img {
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
  }
`;

export default Movie;
