import './sass/app.sass';

import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Home, Destination, Crew, Technology } from './pages/all';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />

      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
      </div>
    </div>
  );
};

export default App;
