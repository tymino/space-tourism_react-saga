import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';

import rootSaga from '../saga';
import pages from '../reducers/pages';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: pages,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
