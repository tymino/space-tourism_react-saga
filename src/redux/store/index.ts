import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga';

import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

import pages from '../reducers/pages';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    pages,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat([sagaMiddleware, routerMiddleware]),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);

export type IRootState = ReturnType<typeof store.getState>;

export default store;
