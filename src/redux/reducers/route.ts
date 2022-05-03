import ActionRoute from '../../types/enums/Route';
import { IStateRoute, IActionRoute } from '../../types/redux/route';

const initState: IStateRoute = {
  actualRoute: '/',
  navigation: []
};

const route = (state = initState, action: IActionRoute) => {
  switch (action.type) {
    case ActionRoute.SET_ROUTE:
      return {
        ...state,
        actualRoute: action.payload,
      };

    default:
      return state;
  }
};

export default route;
