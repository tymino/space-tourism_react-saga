import ActionRoute from '../../types/enums/Route';
import { IActionRoute } from '../../types/redux/route';

const setRoute = (pathname: string): IActionRoute => {
  console.log('set', );
  const payload = pathname.replace('/', '');

  return {
    type: ActionRoute.SET_ROUTE,
    payload,
  };
};

export default setRoute;
