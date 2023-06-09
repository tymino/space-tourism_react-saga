import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga';

import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

import pagesSlice from '../reducers/pagesSlice';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    router: routerReducer,
    pages: pagesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
    }).concat([sagaMiddleware, routerMiddleware]),
});

sagaMiddleware.run(rootSaga);

export const history = createReduxHistory(store);

export type TRootState = ReturnType<typeof store.getState>;

export const selectLoading = (state: TRootState) => state.pages.loading;

export default store;
