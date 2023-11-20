import { put, select } from 'redux-saga/effects'
import { fetchData } from '../../api/fetchData'
import {
  loadingPage,
  loadingPageFromCache,
  loadingPageSuccess,
  loadingPageFailure,
} from '../reducers/pagesSlice'

export function* workerPageSaga(pathname: string): unknown {
  yield put(loadingPage(true))

  const isDataInCache = yield select((state) => !!state.pages.cache[pathname])

  if (isDataInCache) {
    yield put(loadingPageFromCache(pathname))
  } else {
    try {
      const { data } = yield fetchData(pathname)
      const response = { name: pathname, data }

      yield put(loadingPageSuccess(response))
    } catch (error: unknown) {
      if (error instanceof Error) {
        const msg = `Things exploded (${error.message})`
        yield put(loadingPageFailure(msg))
      }
    }
  }
}
