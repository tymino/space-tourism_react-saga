import { EActionPages } from '../../types/enums';
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
    case EActionPages.LOADING_DATA_PAGE:
      return { ...state, loading: true, error: null };

    case EActionPages.FAILURE_LOAD_DATA_PAGE:
      return { ...state, loading: false, error: payload };

    case EActionPages.SUCCESS_DESTINATION_DATA_PAGE:
      return { ...state, loading: false, destination: payload };

    case EActionPages.SUCCESS_CREW_DATA_PAGE:
      return { ...state, loading: false, crew: payload };

    case EActionPages.SUCCESS_TECHNOLOGY_DATA_PAGE:
      return { ...state, loading: false, technology: payload };

    default:
      return state;
  }
};

export default pages;
