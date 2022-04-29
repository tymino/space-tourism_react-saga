import { IData } from '../../types/redux';
import { fork, take, takeEvery, delay, takeLeading, call } from 'redux-saga/effects';

async function fetchData(pageName: string) {
  const response = await fetch(`https://api-space-tourism-saga.herokuapp.com/api/${pageName}`);
  const json = await response.json();

  return json.data;
}

function* testSaga() {
  const pageData: IData[] = yield call(fetchData, 'crew');

  console.log(pageData);
}

export function* routeChangeSaga() {}

export default function* peopleSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery('TEST_LOG', testSaga);
}
