import ActionRoute from '../enums/Route';

export interface IRoutes {
  index: string;
  name: string;
  path: string;
}

export interface IStateRoute {
  actualRoute: string;
  navigation: IRoutes[];
}

interface ISetRoute {
  type: ActionRoute.SET_ROUTE;
  payload: string;
}

export type IActionRoute = ISetRoute;
