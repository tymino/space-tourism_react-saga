import { call } from 'redux-saga/effects';
import { workerPageSaga } from './page';

export function* watcherRoute({ payload }: any) {
  const { pathname } = payload.location;

  if (pathname !== '/') {
    yield call(workerPageSaga, pathname.slice(1));
  }
}
