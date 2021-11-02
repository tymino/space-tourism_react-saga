// reducers
export enum ActionName {
  GET_DATA = 'GET_DATA',
}

// store
export interface IRoutes {
  index: string;
  name: string;
  path: string;
}
export interface IDestinations {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}
export interface ICrew {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
}
export interface ITechnology {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}

export interface IStore {
  routes: IRoutes[];
  destinations: IDestinations[];
  crew: ICrew[];
  technology: ITechnology[];
}

// actions
interface IGetData {
  type: ActionName.GET_DATA;
}

export type IAction = IGetData;
