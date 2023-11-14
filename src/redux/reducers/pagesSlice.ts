import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TActivePage } from '../../types/redux/pages'

interface IInitialStatePages<T> {
  loading: boolean
  error: string | null
  cache: { [key: string]: T }
  activePage: T
}

const initialState: IInitialStatePages<TActivePage> = {
  loading: false,
  error: null,
  cache: {},
  activePage: [],
}

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    loadingPage(state, action: PayloadAction<boolean>) {
      Object.assign(state, { loading: action.payload, error: null })
    },
    loadingPageFromCache(state, action: PayloadAction<string>) {
      state.loading = false
      state.activePage = state.cache[action.payload]
    },
    loadingPageSuccess(state, action: PayloadAction<{ name: string; data: TActivePage }>) {
      state.loading = false
      state.activePage = action.payload.data
      state.cache = {
        ...state.cache,
        [action.payload.name]: action.payload.data,
      }
    },
    loadingPageFailure(state, action: PayloadAction<string | null>) {
      state.loading = false
      state.error = action.payload
    },
  },
})

export const pagesSliceReducer = pagesSlice.reducer

export const { loadingPage, loadingPageFromCache, loadingPageSuccess, loadingPageFailure } =
  pagesSlice.actions
