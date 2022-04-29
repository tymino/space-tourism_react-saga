import { fork, take, takeEvery } from 'redux-saga/effects';

export function* routeChangeSaga() {
  yield;
}

function* testSaga() {
  console.log('Saga working!!!');
  yield;
}

export default function* peopleSaga() {
  yield fork(routeChangeSaga);
  yield fork(testSaga);
  yield take('TEST_LOG');

  console.log('erawra');
}
