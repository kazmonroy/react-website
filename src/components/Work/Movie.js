import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fade, imgAnim, lineAnim } from '../../utils/animations';
import { useScroll } from '../../utils/useScroll';

const Movie = ({ imgSrc, title, to }) => {
  const [controls, element] = useScroll();
  return (
    <StyledMovie
      ref={element}
      variants={fade}
      animate={controls}
      initial='hidden'
    >
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div variants={lineAnim} className='line'></motion.div>
      <Link to={to}>
        <motion.img src={imgSrc} alt='' />
      </Link>
    </StyledMovie>
  );
};

const StyledMovie = styled(motion.div)`
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
