import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const NavLink = ({ link }) => {
  return (
    <li>
      <Link to='/'>{link}</Link>
      <HoverUnderline
        transition={{ duration: 0.75 }}
        initial={{ width: '0%' }}
        animate={{ width: pathname === '/' ? '80%' : '0%' }}
      ></HoverUnderline>
    </li>
  );
};

const HoverUnderline = styled(motion.div)`
  height: 2px;
  width: 0%;
  background: var(--second-color);
  position: absolute;
  bottom: -5px;
  left: 20%;
`;

export default NavLink;
