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

// Style component

// const HeroSection = styled.section`
//   min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 0px 40px;
// `;

// const Description = styled.div`
//   flex: 1;
//   padding: 0px 40px;

//   p {
//     padding: 24px 24px 24px 0px;
//   }
// `;

// const Image = styled.div`
//   display: flex;
//   flex: 1;
//   justify-content: center;
//   overflow: hidden;
//   border-radius: 16px;

//   img {
//     width: 100%;
//     height: 80vh;
//     object-fit: cover;
//   }
// `;

// const Hide = styled.div`
//   overflow: hidden;
// `;

export default Hero;
