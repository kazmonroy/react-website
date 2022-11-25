import React from 'react';
import Question from './Question';

const FAQ = () => {
  return (
    <section className='FAQ'>
      <h2>FAQs</h2>

      <Question question='How do I start?' />
      <Question question='Daily schedule' />
      <Question question='What products do you offer?' />
      <Question question='Different payment methods' />
    </section>
  );
};

export default FAQ;
