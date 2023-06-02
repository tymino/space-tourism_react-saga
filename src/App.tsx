import './sass/index.scss';

import { HistoryRouter as Router } from 'redux-first-history/rr6';
import { history } from './redux/store';

import { Navbar, MyRoutes } from './components';

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navbar />
        <MyRoutes />
      </Router>
    </>
  );
};

export default App;
