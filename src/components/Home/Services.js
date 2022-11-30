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
      <h2>
        High <span>quality</span> services
      </h2>
      <ServicesContent>
        <Image>
          <img src={serviceImg} alt='' />
        </Image>

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
  flex-direction: column;
  height: 95vh;
  margin: 40px 0px;

  h2 {
    display: inline-block;
    margin: 40px 0px;
    padding: 24px 0px;
  }
`;

const ServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  img {
    height: 500px;
  }
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 16px;
  align-content: center;
  justify-items: center;
  padding: 0px 32px;
`;

export default Services;
