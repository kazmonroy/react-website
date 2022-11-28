import React from 'react';
import ServicesCard from './ServicesCard';
import serviceImg from '../../img/home2.png';
import {
  faClock,
  faCreditCard,
  faCameraRetro,
  faPeopleGroup,
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { HeroSection, Image } from '../../styles.js';

const Services = () => {
  return (
    <ServiceSection>
      <Image>
        <img src={serviceImg} alt='' />
      </Image>
      <ServicesContent>
        <h2>
          High <span>quality</span> services
        </h2>
        <Cards>
          <ServicesCard icon={faClock} title='Efficient' />
          <ServicesCard icon={faCreditCard} title='Affordable' />
          <ServicesCard icon={faCameraRetro} title='Pro grade Gear' />
          <ServicesCard icon={faPeopleGroup} title='Teamwork' />
        </Cards>
      </ServicesContent>
    </ServiceSection>
  );
};

const ServiceSection = styled(HeroSection)`
  padding: 0px 40px;
  display: flex;
`;

const ServicesContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
`;

export default Services;
