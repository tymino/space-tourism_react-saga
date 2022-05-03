import ActionRoute from '../../types/enums/Route';
import { IActionRoute } from '../../types/redux/route';

const setRoute = (pathname: string): IActionRoute => {
  const path = pathname.replace('/', '');

  return {
    type: ActionRoute.SET_ROUTE,
    payload: path,
  };
};

export default setRoute;
