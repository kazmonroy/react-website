import React from 'react';
import heroImg from '../../img/home1.png';

const Hero = () => {
  return (
    <div className='Hero'>
      <div className='description'>
        <div className='title'>
          <div className='hide'>
            <h2>We work to make</h2>
          </div>
          <div className='hide'>
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className='hide'>
            <h2>true</h2>
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
          consectetur.
        </p>
        <button>Contact us</button>
      </div>
      <img src={heroImg} alt='' />
    </div>
  );
};

export default Hero;
