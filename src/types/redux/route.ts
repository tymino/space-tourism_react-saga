import { EActionRoute } from '../enums';

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
  type: EActionRoute.SET_ROUTE;
  payload: string;
}

export type IActionRoute = ISetRoute;
