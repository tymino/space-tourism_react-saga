import { take, call, put, fork, takeLeading } from 'redux-saga/effects';

import { EActionPages, ERouteName } from '../../types/enums';

import { IActionRoute } from '../../types/redux/route';
import IData from '../../types/saga/fetchData';
import {
  IDataCrew,
  IDataDestination,
  IDataTechnology,
} from '../../types/redux/pages';

import {
  setLoading,
  setError,
  setDestination,
  setCrew,
  setTechnology,
} from '../actions/pages';

async function fetchData(pageName: string) {
  const response = await fetch(
    `https://space-tourism-server-saga.onrender.com/api/${pageName}`
  );
  const json = await response.json();

  return json;
}

export function* loadData() {
  while (true) {
    const { payload }: IActionRoute = yield take('SET_ROUTE');

    if (payload !== ERouteName.home) {
      const { error, data }: IData = yield call(fetchData, payload);

      if (error) {
        yield put(setError(`No page data`));
      }

      switch (payload) {
        case ERouteName.destination: {
          yield put(setDestination(data as IDataDestination[]));
          break;
        }

        case ERouteName.crew: {
          yield put(setCrew(data as IDataCrew[]));
          break;
        }

        case ERouteName.technology: {
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
  yield takeLeading(EActionPages.LOADING_DATA_PAGE, loadData);
}
