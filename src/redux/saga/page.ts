import { put, delay, select } from 'redux-saga/effects';
import { fetchData } from '../../api/fetchData';
import {
  loadingPage,
  loadingPageFromCache,
  loadingPageSuccess,
  loadingPageFailure,
} from '../reducers/pagesSlice';

export function* workerPageSaga(pathname: string): any {
  yield put(loadingPage(true));

  const isDataInCache = yield select((state) => !!state.pages.cache[pathname]);

  if (isDataInCache) {
    yield put(loadingPageFromCache(pathname));
  } else {
    yield delay(500);

    try {
      const { data } = yield fetchData(pathname);
      const response = { name: pathname, data };

      yield put(loadingPageSuccess(response));
    } catch (error: any) {
      yield put(loadingPageFailure(error.message));
    }
  }
}
