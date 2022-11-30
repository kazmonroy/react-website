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
import { HeroSection, Image } from '../../utils/styles.js';
import { fade } from '../../utils/animations';
import { useScroll } from '../../utils/useScroll';

const Services = () => {
  const [controls, element] = useScroll();
  return (
    <ServiceSection
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
    >
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
  display: flex;
  min-height: 95vh;
  margin: 40px 0px;

  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;

const ServicesContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 40px;
  justify-content: center;

  h2 {
    display: inline-block;
    padding: 24px 0px;
    text-align: center;
  }

  @media (max-width: 450px) {
    padding: 0px 0px;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;
`;

export default Services;
