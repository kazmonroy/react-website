import React from 'react';
import Question from './Question';
import styled from 'styled-components';
import { HeroSection } from '../../utils/styles.js';
import { motion, LayoutGroup } from 'framer-motion';
import { fade } from '../../utils/animations';
import { useScroll } from '../../utils/useScroll';

const FAQ = () => {
  const [controls, element] = useScroll();

  return (
    <FaqSection
      variants={fade}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <h2>FAQs</h2>

      <Questions>
        <LayoutGroup>
          <Question question='How do I start?' />
          <Question question='Daily schedule' />
          <Question question='What products do you offer?' />
          <Question question='Different payment methods' />
        </LayoutGroup>
      </Questions>
    </FaqSection>
  );
};
const FaqSection = styled(HeroSection)`
  display: inline-block;
  width: 100%;
  margin-top: 40px;

  h2 {
    color: var(--second-color);
  }
`;

const Questions = styled.div`
  .question,
  .answer {
    padding: 24px 0px;

    h3 {
      font-size: 2rem;
    }

    .faq-line {
      background: var(--third-color);
      height: 2px;
      margin: 16px 0px;
      width: 100%;
    }
  }
`;

export default FAQ;
