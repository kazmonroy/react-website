import React from 'react';
import { pageAnimation } from '../utils/animations';
import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <h1>Contact Us</h1>
    </motion.div>
  );
};

export default ContactUs;
