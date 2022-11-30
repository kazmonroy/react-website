import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 96px;
`;

export const Description = styled.div`
  flex: 1;
  padding: 0px 40px 0px 0px;

  p {
    padding: 24px 24px 24px 0px;
  }
`;

export const Image = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
    z-index: 2;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
