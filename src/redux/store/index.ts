import { configureStore } from '@reduxjs/toolkit';
import reducer from '../reducers';

import createSagaMiddleware from '@redux-saga/core';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: false,
    }).concat([sagaMiddleware]),
});

sagaMiddleware.run(rootSaga);

export default store;
