import { call } from 'redux-saga/effects'
import { workerPageSaga } from './page'

interface IAction {
  type: string
  payload: {
    action: string
    location: {
      hash: string
      key: string
      pathname: string
      search: string
      state: null
    }
  }
}

export function* watcherRoute({ payload }: IAction) {
  const { pathname } = payload.location

  if (pathname !== '/') {
    yield call(workerPageSaga, pathname.slice(1))
  }
}
