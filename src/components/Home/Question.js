import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Question = ({ question }) => {
  const [toggleQuestion, setToggleQuestion] = useState(false);

  return (
    <motion.div layout className='question'>
      <motion.h3 layout onClick={() => setToggleQuestion(!toggleQuestion)}>
        {question}
      </motion.h3>
      {toggleQuestion && (
        <div className='answer'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      )}
      <div className='faq-line'></div>
    </motion.div>
  );
};

export default Question;
