import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import FAQ from '../components/Home/FAQ';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { pageAnimation } from '../utils/animations';
import ScrollTop from '../utils/ScrollTop';

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <ScrollTop />
      <Hero />
      <Services />
      <FAQ />
    </motion.div>
  );
};

// const HomeSection = styled.section``;

export default Home;
