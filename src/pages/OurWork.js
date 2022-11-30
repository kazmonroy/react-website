import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesWork from '../components/Work/MoviesWork';
import MovieDetails from '../components/Work/MovieDetails';
import { motion } from 'framer-motion';
import { pageAnimation, slider, sliderContainer } from '../utils/animations';
import styled from 'styled-components';

const OurWork = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: 'white', color: '#313131' }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Routes>
        <Route path='/' element={<MoviesWork />} />
        <Route path=':id' element={<MovieDetails />} />
      </Routes>
    </motion.div>
  );
};

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100vw;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
