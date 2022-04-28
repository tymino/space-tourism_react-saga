import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from '@redux-saga/core';

import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import rootReducer from '../reducers';
import rootSaga from '../saga';

export const history = createBrowserHistory();

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware, routerMiddleware(history));
  const composeEnhancers = composeWithDevTools(middleware);

  const store = createStore(rootReducer(history), {}, composeEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};

const store = configureStore();

// const store = configureStore({
//   reducer: {
//     one: oneSlice.reducer,
//     two: twoSlice.reducer,
//   },
// })
// export type RootState = ReturnType<typeof store.getState>

export default store;
