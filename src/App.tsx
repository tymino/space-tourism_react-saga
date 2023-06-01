import './sass/index.scss';

import { Routes, Route } from 'react-router-dom';
// import { HistoryRouter as Router } from "redux-first-history/rr6";
import { Router } from 'react-router-dom';
import { history } from './redux/store';

import Navbar from './components/Navbar/Navbar';
import { Home, Destination, Crew, Technology, NotFound } from './pages';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
