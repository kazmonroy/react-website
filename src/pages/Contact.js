import React from 'react';
import { pageAnimation } from '../utils/animations';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { titleAnimation } from '../utils/animations';
import ContactLink from '../components/Contact/ContactLink';

const ContactUs = () => {
  return (
    <StyledContactUs
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      style={{ background: 'white' }}
    >
      <Hide>
        <motion.h2 variants={titleAnimation}>Get in touch</motion.h2>
      </Hide>
      <ContactLink title='Send email' />
      <ContactLink title='Call us ' />
    </StyledContactUs>
  );
};

const StyledContactUs = styled(motion.div)`
  min-height: 90vh;
  padding: 40px 96px;
  overflow-x: hidden;

  @media (max-width: 650px) {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
  }
`;

const Hide = styled.div`
  overflow: hidden;
  color: var(--base-color);
`;

export default ContactUs;
