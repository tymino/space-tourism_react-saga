import './styles/index.css'

import { HistoryRouter as Router } from 'redux-first-history/rr6'
import { history } from './redux/store'
import { Loading, Navmenu, BaseRoutes } from './components'

export const App = () => {
  return (
    <>
      <Router history={history}>
        <Navmenu />
        <Loading>
          <BaseRoutes />
        </Loading>
      </Router>
    </>
  )
}
