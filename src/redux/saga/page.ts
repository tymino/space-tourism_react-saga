import { put } from 'redux-saga/effects';
import { fetchData } from '../../api/fetchData';
import {
  loadingPage,
  loadingPageSuccess,
  loadingPageFailure,
} from '../reducers/pagesSlice';

export function* workerPageSaga(pathname: string): any {
  yield console.log('workerPageSaga', pathname);

  yield put(loadingPage(true));

  try {
    const posts = yield fetchData(pathname);

    yield put(loadingPageSuccess(posts));
  } catch (error: any) {
    yield put(loadingPageFailure(error.message));
  }
}
