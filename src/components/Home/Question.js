import React from 'react';

const Question = ({ question }) => {
  return (
    <div className='question'>
      <h3>{question}</h3>
      <div className='answer'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='faq-line'></div>
    </div>
  );
};

export default Question;
