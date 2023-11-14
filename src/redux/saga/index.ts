import { takeLatest } from 'redux-saga/effects'
import { LOCATION_CHANGE } from 'redux-first-history'
import { watcherRoute } from './route'

export function* rootSaga() {
  yield takeLatest(LOCATION_CHANGE, watcherRoute)
}
