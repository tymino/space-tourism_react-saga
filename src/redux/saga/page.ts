import { take, call, put, takeEvery, delay, fork } from 'redux-saga/effects';
import { ActionPages, ActionRoute, RouteName } from '../../types/enums';

import { IDataCrew, IDataDestination, IDataTechnology } from '../../types/redux/pages';
import { IActionRoute } from '../../types/redux/route';
import IData from '../../types/saga/fetchData';
import { setLoading, setError, setDestination, setCrew, setTechnology } from '../actions/pages';

async function fetchData(pageName: string) {
  const response = await fetch(`https://api-space-tourism-saga.herokuapp.com/api/${pageName}`);
  const json = await response.json();

  return json;
}

export function* loadData() {
  while (true) {
    const { payload }: IActionRoute = yield take('SET_ROUTE');

    if (payload !== RouteName.home) {
      const { error, data }: IData = yield call(fetchData, payload);

      if (error) {
        yield put(setError(`No page data`));
      }

      switch (payload) {
        case RouteName.destination: {
          yield put(setDestination(data as IDataDestination[]));
          break;
        }

        case RouteName.crew: {
          yield put(setCrew(data as IDataCrew[]));
          break;
        }

        case RouteName.technology: {
          yield put(setTechnology(data as IDataTechnology[]));
          break;
        }

        default:
          console.log('switch home page');
          break;
      }
    }
  }
}

export function* routeChangeSaga() {
  yield put(setLoading(true));
}

export default function* pageSaga() {
  yield fork(routeChangeSaga);
  yield takeEvery(ActionPages.LOADING_DATA_PAGE, loadData);
}
