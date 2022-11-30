import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled(motion.section)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 96px;

  @media (max-width: 1085px) {
    flex-direction: column-reverse;
    padding: 0px 24px;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding: 0px 40px 0px 0px;

  p {
    padding: 24px 24px 24px 0px;
  }

  @media (max-width: 1085px) {
    text-align: center;
    padding: 24px 0px;

    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

export const Image = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  overflow: hidden;
  border-radius: 16px;
  min-width: 350px;

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    z-index: 2;
    border-radius: 16px;
  }

  @media (max-width: 1085px) {
    text-align: center;
    padding: 24px 0px;
    border-radius: 16px;

    img {
      height: 50vh;

      border-radius: 16px;
    }
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
