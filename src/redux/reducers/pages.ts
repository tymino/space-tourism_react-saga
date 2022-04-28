import { ActionName, IState, IAction } from '../../types/redux';

const initState: IState = {
  loading: false,
  error: null,
  data: [],
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
