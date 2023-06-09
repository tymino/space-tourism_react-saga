import './sass/index.scss';

import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history } from './redux/store';

import { Loading, Navmenu, MyRoutes } from './components';

// will need to change the var css colors

const App = () => {
  return (
    <>
      <Loading>
        <Router history={history}>
          <Navmenu />
          <MyRoutes />
        </Router>
      </Loading>
    </>
  );
};

export default App;
