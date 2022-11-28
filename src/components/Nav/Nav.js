import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <StyledNav>
      <Logo>
        <Link to='/'>Capture</Link>
      </Logo>
      <ul>
        <li>
          <Link to='/'>About us</Link>
        </li>
        <li>
          <Link to='/work'>Our work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  align-items: center;
  padding: 0px 96px;
  font-size: 1rem;
  background-color: #2c2c2c;

  a {
    color: var(--third-color);
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      padding: 0px 16px;
      position: relative;
    }
  }
`;

const Logo = styled.div`
  margin-right: auto;

  a {
    color: var(--second-color);
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 1.5rem;
  }
`;

export default Nav;
