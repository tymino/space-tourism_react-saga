import { matchPath } from 'react-router';
import { fork, take, call, put } from 'redux-saga/effects';

import { IActionPage, IDataPages } from '../../types/redux/pages';
import { IActionRoute } from '../../types/redux/route';

async function fetchData(pageName: string) {
  const response = await fetch(`https://api-space-tourism-saga.herokuapp.com/api/${pageName}`);
  const json = await response.json();

  return json.data;
}

export function* routeChangeSaga() {
  while (true) {
    const action: IActionRoute = yield take('SET_ROUTE');
    const path = action.payload;

    console.log(path);

    if (!matchPath('', path)) {
      const pageData: IDataPages = yield call(fetchData, path);
      console.log('saga', pageData);

      const action = {
        type: 'LOAD_DATA_PAGE_SUCCESS',
        payload: pageData,
      };

      yield put(action);
    }
  }
}

export default function* pageSaga() {
  yield fork(routeChangeSaga);
}
