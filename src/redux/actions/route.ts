import ActionRoute from '../../types/enums/Route';
import { IActionRoute } from '../../types/redux/route';

const setRoute = (pathname: string): IActionRoute => ({
  type: ActionRoute.SET_ROUTE,
  payload: pathname,
});

export default setRoute;
