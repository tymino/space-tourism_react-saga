import ActionPages from '../../types/enums/Pages';
import { IActionPage, IStatePages } from '../../types/redux/pages';

const initState: IStatePages = {
  loading: false,
  error: null,
  destination: [],
  crew: [],
  technology: [],
};

const pages = (state = initState, { type, payload }: IActionPage) => {
  switch (type) {
    case ActionPages.LOADING_DATA_PAGE:
      return { ...state, loading: true, error: null };

    case ActionPages.FAILURE_LOAD_DATA_PAGE:
      return { ...state, loading: false, error: payload };

    case ActionPages.SUCCESS_DESTINATION_DATA_PAGE:
      return { ...state, loading: false, destination: payload };

    case ActionPages.SUCCESS_CREW_DATA_PAGE:
      return { ...state, loading: false, crew: payload };

    case ActionPages.SUCCESS_TECHNOLOGY_DATA_PAGE:
      return { ...state, loading: false, technology: payload };

    default:
      return state;
  }
};

export default pages;
