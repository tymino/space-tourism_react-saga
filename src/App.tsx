import './sass/index.sass';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home, Destination, Crew, Technology } from './pages';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination data={[]} />} />
          <Route path="crew" element={<Crew data={[]} />} />
          <Route path="technology" element={<Technology data={[]} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
