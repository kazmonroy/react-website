import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import NavLink from './NavLink';

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <Logo>
        <Link to='/'>Capture</Link>
      </Logo>
      <ul>
        <NavLink to='/' link='About' pathname={pathname} />
        <NavLink to='/work' link='Work' pathname={pathname} />
        <NavLink to='/contact' link='Contact' pathname={pathname} />
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

const HoverUnderline = styled(motion.div)`
  height: 2px;
  width: 0%;
  background: var(--second-color);
  position: absolute;
  bottom: -5px;
  left: 20%;
`;

export default Nav;
