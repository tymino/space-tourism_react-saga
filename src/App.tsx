import './sass/index.scss';

import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history } from './redux/store';

import { Loading, Navmenu, MyRoutes } from './components';

// will need to change the var css colors

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navmenu />
        <Loading>
          <MyRoutes />
        </Loading>
      </Router>
    </>
  );
};

export default App;
