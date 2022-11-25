import React from 'react';
import Hero from '../components/Home/Hero';
import Services from '../components/Home/Services';
import FAQ from '../components/Home/FAQ';

const Home = () => {
  return (
    <section className='Home'>
      <Hero />
      <Services />
      <FAQ />
    </section>
  );
};

export default Home;
