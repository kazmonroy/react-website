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
          <Link to='/'>About</Link>
        </li>
        <li>
          <Link to='/work'>Work</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  padding: 0px 96px;
  font-size: 1rem;
  background-color: #2c2c2c;
  position: sticky;
  top: 0;
  z-index: 4;

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

  @media (max-width: 650px) {
    padding: 0px 16px;
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
