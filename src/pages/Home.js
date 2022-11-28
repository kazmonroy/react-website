import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import FAQ from '../components/Home/FAQ';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeSection>
      <Hero />
      <Services />
      <FAQ />
    </HomeSection>
  );
};

const HomeSection = styled.section``;

export default Home;
