import { combineReducers } from '@reduxjs/toolkit';
import store from '../store';

import pages from './pages';
import route from './route';

const reducer = combineReducers({ pages, route });

export type IRootState = ReturnType<typeof store.getState>

export default reducer;
