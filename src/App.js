import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import Home from './pages/Home';
import Nav from './components/Nav/Nav';
import ContactUs from './pages/Contact';
import OurWork from './pages/OurWork';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<OurWork />} />
          <Route path='/contact' element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
