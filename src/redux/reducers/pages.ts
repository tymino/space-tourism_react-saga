import ActionPages from '../../types/enums/Pages';
import { IActionPage, IStatePages } from '../../types/redux/pages';

const initState: IStatePages = {
  destination: {
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

const pages = (state = initState, action: IActionPage) => {
  const currentRoute = 'crew';

  switch (action.type) {
    case ActionPages.LOAD_DATA_PAGE:
      return {
        ...state,
        pages: {
          ...state,
          [currentRoute]: {
            ...state[currentRoute],
            loading: true,
          },
        },
      };

    case ActionPages.LOAD_DATA_PAGE_SUCCESS:
      return {
        ...state,
        pages: {
          ...state,
          [currentRoute]: {
            ...state[currentRoute],
            data: action.payload,
          },
        },
      };

    case ActionPages.LOAD_DATA_PAGE_FAILURE:
      return {
        ...state,
        pages: {
          [currentRoute]: {
            ...state[currentRoute],
            error: action.payload,
          },
        },
      };

    default:
      return state;
  }
};

export default pages;
