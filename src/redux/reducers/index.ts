import { combineReducers } from "@reduxjs/toolkit";

import pages from './pages';
import route from './route';

const reducer = combineReducers({ pages, route });

export default reducer;