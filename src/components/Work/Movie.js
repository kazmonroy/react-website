import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, imgAnim, lineAnim } from '../../animations';

const Movie = ({ imgSrc, title, to }) => {
  return (
    <StyledMovie>
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div variants={lineAnim} className='line'></motion.div>
      <Link to={to}>
        <motion.img variants={imgAnim} src={imgSrc} alt='' />
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled.section`
  padding: 40px 0px;

  .line {
    width: 100%;
    height: 2px;
    background-color: var(--second-color);
    margin-bottom: 24px;
  }

  img {
    width: 100%;
    max-height: 70vh;
    object-fit: cover;
  }
`;

export default Movie;
