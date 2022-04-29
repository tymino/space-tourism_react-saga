import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import pages from './pages';
import { BrowserHistory } from 'history';

const rootReducer = (history: BrowserHistory) =>
  combineReducers({
    router: connectRouter(history),
    pages,
  });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
