import React from 'react';
import Question from './Question';
import styled from 'styled-components';
import { HeroSection, Image } from '../../styles.js';

const FAQ = () => {
  return (
    <FaqSection>
      <h2>FAQs</h2>

      <Questions>
        <Question question='How do I start?' />
        <Question question='Daily schedule' />
        <Question question='What products do you offer?' />
        <Question question='Different payment methods' />
      </Questions>
    </FaqSection>
  );
};
const FaqSection = styled(HeroSection)`
  display: inline-block;
  width: 100%;

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
