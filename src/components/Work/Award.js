import React from 'react';
import styled from 'styled-components';

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className='line'></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const StyledAward = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .line {
    height: 2px;
    background: var(--second-color);
    width: 50%;
  }

  p {
    padding: 24px 0px;
  }
`;
export default Award;
