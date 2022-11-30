import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ to, link, pathname }) => {
  return (
    <li>
      <Link to={to}>{link}</Link>
      <HoverUnderline
        transition={{ duration: 0.75 }}
        initial={{ width: '0%' }}
        animate={{ width: pathname === to ? '80%' : '0%' }}
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
