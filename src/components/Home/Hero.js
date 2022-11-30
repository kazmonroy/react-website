import React from 'react';
import heroImg from '../../img/home1.png';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeroSection, Description, Image, Hide } from '../../utils/styles.js';
import {
  titleAnimation,
  fade,
  imgAnim,
  spanAnim,
} from '../../utils/animations';
import Wave from './Wave';

const Hero = () => {
  return (
    <HeroSection>
      <Description>
        <motion.div className='title'>
          <Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              your <motion.span variants={spanAnim}>dreams</motion.span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Hide>
        </motion.div>

        <motion.p variants={fade}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          consectetur.
        </motion.p>
        <Link to='/contact'>
          <motion.button variants={fade}>Contact us</motion.button>
        </Link>
      </Description>
      <Image>
        <motion.img
          variants={imgAnim}
          initial='hidden'
          animate='show'
          src={heroImg}
          alt=''
        />
      </Image>
      <Wave />
    </HeroSection>
  );
};

export default Hero;
