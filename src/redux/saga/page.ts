import { fork } from 'redux-saga/effects';

const routeChangeSaga = () => {};

export default function* peopleSaga() {
  yield fork(routeChangeSaga);
}
