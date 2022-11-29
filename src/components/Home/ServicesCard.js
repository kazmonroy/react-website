import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Card = ({ icon, title }) => {
  return (
    <EachCard>
      <div className='icon'>
        <FontAwesomeIcon icon={icon} />
        <h3>{title}</h3>
      </div>
      <p>Lorem ipsum dolor sit amet.</p>
    </EachCard>
  );
};

const EachCard = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 40px; */

  .icon {
    display: flex;
    align-items: center;
    padding: 24px 0px;

    svg {
      font-size: 2rem;
    }

    h3 {
      padding-left: 16px;
    }
  }

  p {
    padding: 24px 0px;
  }
`;

export default Card;
