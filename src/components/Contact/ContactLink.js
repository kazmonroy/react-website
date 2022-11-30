import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { titleAnimation } from '../../utils/animations';

const ContactLink = ({ title }) => {
  return (
    <Hide>
      <StyledLink variants={titleAnimation}>
        <CustomBulletPoint></CustomBulletPoint>
        <h2>{title}</h2>
      </StyledLink>
    </Hide>
  );
};

const CustomBulletPoint = styled(motion.div)`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background: var(--second-color);
`;

const StyledLink = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 16px;

  h2 {
    padding: 0px 24px;
    color: var(--base-color);
    font-size: 2rem;
    font-weight: 200;
  }
`;
const Hide = styled(motion.div)`
  overflow: hidden;
`;

export default ContactLink;
