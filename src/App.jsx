import React from 'react';
import { Router, Route, Routes } from 'react-router';

import { history } from './redux/store';
import { useDispatch } from 'react-redux';

import { Crew } from './pages';

import { ConnectedRouter } from 'connected-react-router';

// const App: React.FC = () => {
//   const dispatch = useDispatch();

//   const handleClick = () => {
//     dispatch({ type: 'TEST_LOG' });
//   };
//   return (
//     <>
//       <ConnectedRouter history={localHistory}>
//         <Switch>
//           <Route path="/" element={<Crew data={[]} />} />
//         </Switch>
//       </ConnectedRouter>
//       App page
//       <br />
//       <button onClick={handleClick}>click</button>
//     </>
//   );
// };

/*
  - Снизить версию react-router-dom
  - Доделать сагу
*/

const Home = () => {
  return <div>Home</div>;
};

const App = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({ type: 'TEST_LOG' });
  };

  return (
    <>
      <ConnectedRouter history={history}>
        <Router>
          <Route path="/" exact element={Home} />
        </Router>
      </ConnectedRouter>
    </>
  );
};

export default App;
