import { fork, take, call, put, takeEvery } from 'redux-saga/effects';
import ActionRoute from '../../types/enums/Route';
import RouteName from '../../types/enums/RouteName';

import { IActionPage, IDataCrew, IDataDestination, IDataTechnology } from '../../types/redux/pages';
import { IActionRoute } from '../../types/redux/route';
import { loading, error, crew, destination, technology } from '../actions/pages';

async function fetchData(pageName: string) {
  const response = await fetch(`https://api-space-tourism-saga.herokuapp.com/api/${pageName}`);

  console.log('fetch', response);
  const json = await response.json();
  
  return json.data;
}

export function* routeChangeSaga() {
  while (true) {
    // yield put(loading(true));

    const { payload }: IActionRoute = yield take('SET_ROUTE');
    let path = payload;

    if (payload === '/') {
      path = '/';
    } else {
      type IResponse = IDataDestination | IDataCrew | IDataTechnology;
      const pageData: IResponse[] = yield call(fetchData, '');

      switch (path) {
        case RouteName.destination: {
          yield put(destination(pageData as IDataDestination[]));
          break;
        }

        case RouteName.crew: {
          yield put(crew(pageData as IDataCrew[]));
          break;
        }

        case RouteName.technology: {
          yield put(technology(pageData as IDataTechnology[]));
          break;
        }

        default:
          console.log('Error loading');
          yield put(error('Error loading'));
          break;
      }
    }
  }
}

export default function* pageSaga() {
  yield fork(routeChangeSaga);
}
