import React from 'react';
import ServicesCard from './ServicesCard';
import serviceImg from '../../img/home2.png';
import {
  faClock,
  faCreditCard,
  faCameraRetro,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className='services'>
      <h2>
        High <span>quality</span> services
      </h2>
      <div className='cards'>
        <ServicesCard icon={faClock} title='Efficient' />
        <ServicesCard icon={faCreditCard} title='Affordable' />
        <ServicesCard icon={faCameraRetro} title='Pro grade Gear' />
        <ServicesCard icon={faPeopleGroup} title='Teamwork' />
      </div>
      <img src={serviceImg} alt='' />
    </div>
  );
};

export default Services;
