import { EActionRoute } from '../../types/enums';
import { IActionRoute } from '../../types/redux/route';

const setRoute = (pathname: string): IActionRoute => {
  const payload = pathname.replace('/', '');

  return {
    type: EActionRoute.SET_ROUTE,
    payload,
  };
};

export default setRoute;
