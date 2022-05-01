import { matchPath } from 'react-router';
import { fork, take, takeEvery, call } from 'redux-saga/effects';

import { IData } from '../../types/redux';

async function fetchData(pageName: string) {
  const response = await fetch(`https://api-space-tourism-saga.herokuapp.com/api/${pageName}`);
  const json = await response.json();

  return json.data;
}

function* testSaga() {
  const pageData: IData[] = yield call(fetchData, 'crew');

  console.log(pageData);
}

export function* routeChangeSaga() {
  while (true) {
    // const action: string = yield take(LOCATION_CHANGE);

    // console.log(action);

    yield;
  }
}

export default function* peopleSaga() {
  // yield fork(routeChangeSaga);
  yield takeEvery('TEST_LOG', testSaga);
}
