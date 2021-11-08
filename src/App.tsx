import './sass/app.sass';

import React from 'react';
import { Route } from 'react-router-dom';
import useTypedSelector from './hooks/useTypedSelector';

import Navbar from './components/Navbar';
import { Home, Destination, Crew, Technology } from './pages/all';

const App: React.FC = () => {
  const { routes, destinations, crew, technology } = useTypedSelector(
    (state) => state,
  );

  return (
    <div className="app">
      <Navbar routes={routes} />

      <div className="content" role="main">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/destination">
          <Destination destinationsData={destinations} />
        </Route>
        <Route exact path="/crew">
          <Crew crewData={crew} />
        </Route>
        <Route exact path="/technology">
          <Technology technologyData={technology} />
        </Route>
      </div>
    </div>
  );
};

export default App;
