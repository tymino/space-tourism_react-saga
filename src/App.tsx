import './sass/index.sass';

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home, Destination, Crew, Technology } from './pages';

import useTypedSelector from './hooks/useTypedSelector';
import { selectData } from './redux/selectors';

const App: React.FC = () => {
  const data = useTypedSelector(selectData);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination data={data} />} />
          {/* <Route path="crew" element={<Crew data={data} />} /> */}
          {/* <Route path="technology" element={<Technology data={data} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
