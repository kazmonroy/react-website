import React from 'react';
import heroImg from '../../img/home1.png';
import styled from 'styled-components';
import { HeroSection, Description, Image, Hide } from '../../styles.js';

const Hero = () => {
  return (
    <HeroSection>
      <Description>
        <div className='title'>
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          consectetur.
        </p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={heroImg} alt='' />
      </Image>
    </HeroSection>
  );
};

export default Hero;
