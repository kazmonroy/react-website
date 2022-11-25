import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ icon, title }) => {
  return (
    <div className='card'>
      <div className='icon'>
        <FontAwesomeIcon icon={icon} />
        <h3>{title}</h3>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Card;
