import React from 'react';
import heroImg from '../../img/home1.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroSection, Description, Image, Hide } from '../../styles.js';

const Hero = () => {
  return (
    <HeroSection>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
        </motion.div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          consectetur.
        </p>
        <Link to='/contact'>
          <button>Contact us</button>
        </Link>
      </Description>
      <Image>
        <img src={heroImg} alt='' />
      </Image>
    </HeroSection>
  );
};

export default Hero;
