import { all, spawn } from 'redux-saga/effects';
import page from './page';

export default function* rootSaga() {
  const sagas = [page];

  yield all(sagas.map((s) => spawn(s)));
}
