import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  IDataCrew,
  IDataDestination,
  IDataTechnology,
} from '../../types/redux/pages';

type TActivePage = IDataDestination[] | IDataCrew[] | IDataTechnology[];

interface IInitialStatePages<T> {
  loading: boolean;
  error: string | null;
  cache: { [key: string]: T };
  activePage: TActivePage | null;
}

const initialState: IInitialStatePages<TActivePage> = {
  loading: false,
  error: null,
  cache: {},
  activePage: null,
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    loadingPage(state, action: PayloadAction<boolean>) {
      Object.assign(state, { loading: action.payload, error: null });
    },
    loadingPageFromCache(state, action: PayloadAction<string>) {
      state.loading = false;
      state.activePage = state.cache[action.payload];
    },
    loadingPageSuccess(
      state,
      action: PayloadAction<{ name: string; data: TActivePage }>
    ) {
      state.loading = false;
      state.activePage = action.payload.data;
      state.cache = {
        ...state.cache,
        [action.payload.name]: action.payload.data,
      };
    },
    loadingPageFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loadingPage,
  loadingPageFromCache,
  loadingPageSuccess,
  loadingPageFailure,
} = pagesSlice.actions;

export default pagesSlice.reducer;
