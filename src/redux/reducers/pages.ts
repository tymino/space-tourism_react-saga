import { ActionName, IState, IAction } from '../../types/redux';

const initState: IState = {
  routes: [
    { index: '00', name: 'home', path: '/' },
    { index: '01', name: 'destination', path: '/destination' },
    { index: '02', name: 'crew', path: '/crew' },
    { index: '03', name: 'technology', path: '/technology' },
  ],
  destinations: {
    loading: false,
    error: null,
    data: [],
  },
  crew: {
    loading: false,
    error: null,
    data: [],
  },
  technology: {
    loading: false,
    error: null,
    data: [],
  },
};

const pages = (state = initState, action: IAction) => {
  switch (action.type) {
    case ActionName.LOAD_DATA:
      return { ...state, loading: true };

    case ActionName.LOAD_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };

    case ActionName.LOAD_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default pages;
