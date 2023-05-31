import { EActionRoute } from '../../types/enums';
import { IStateRoute, IActionRoute } from '../../types/redux/route';

const initState: IStateRoute = {
  actualRoute: '/',
  navigation: [
    { index: '00', name: 'home', path: '/' },
    { index: '01', name: 'destination', path: 'destination' },
    { index: '02', name: 'crew', path: 'crew' },
    { index: '03', name: 'technology', path: 'technology' },
  ],
};

const route = (state = initState, action: IActionRoute) => {
  switch (action.type) {
    case EActionRoute.SET_ROUTE:
      return {
        ...state,
        actualRoute: action.payload,
      };

    default:
      return state;
  }
};

export default route;
