import './sass/index.scss';

import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history } from './redux/store';

import { Navmenu, MyRoutes } from './components';

// will need to change the var css colors

import { fetchData } from './api/fetchData';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navmenu />
        <MyRoutes />
        <button onClick={() => fetchData('crew')}>test</button>
      </Router>
    </>
  );
};

export default App;
