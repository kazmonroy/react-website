import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import ContactUs from './pages/Contact';
import OurWork from './pages/OurWork';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();

  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/work/*' element={<OurWork />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
