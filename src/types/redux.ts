// action name
export enum ActionName {
  LOAD_DATA = 'LOAD_DATA',
  LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE = 'LOAD_DATA_FAILURE',
}

// store
export interface IRoutes {
  index: string;
  name: string;
  path: string;
}

export interface IDestinations {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description?: string;
  distance?: string;
  travel?: string;
}

export interface ICrew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role?: string;
  bio?: string;
}

export interface ITechnology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description?: string;
}

export interface IState {
  routes: IRoutes[];
  currentRoute: string;
  destinations: {
    loading: boolean;
    error: null | string;
    data: IDestinations[];
  };
  crew: {
    loading: boolean;
    error: null | string;
    data: ICrew[];
  };
  technology: {
    loading: boolean;
    error: null | string;
    data: ITechnology[];
  };
}

// actions
interface ILoadData {
  type: ActionName.LOAD_DATA;
}
interface ILoadDataSuccess {
  type: ActionName.LOAD_DATA_SUCCESS;
  payload: IData[];
}
interface ILoadDataFailure {
  type: ActionName.LOAD_DATA_FAILURE;
  payload: string;
}

export type IAction = ILoadData | ILoadDataSuccess | ILoadDataFailure;
