import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import { rootSaga } from '../saga';

import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

import { pagesSliceReducer } from '../reducers/pagesSlice';

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    router: routerReducer,
    pages: pagesSliceReducer,
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
export const selectActivePage = (state: TRootState) => state.pages.activePage;
