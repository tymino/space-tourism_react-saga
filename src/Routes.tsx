import './sass/index.sass';

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home, Destination, Crew, Technology } from './pages';

const Routes: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/destination">
            <Destination data={[]} />
          </Route>
          <Route exact path="/crew">
            <Crew data={[]} />
          </Route>
          <Route exact path="/technology">
            <Technology data={[]} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
