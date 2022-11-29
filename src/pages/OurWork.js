import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviesWork from '../components/Work/MoviesWork';
import MovieDetails from '../components/Work/MovieDetails';

const OurWork = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MoviesWork />} />
        <Route path=':id' element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

export default OurWork;
