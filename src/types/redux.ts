// reducers
export enum ActionName {
  GET_DATA = 'GET_DATA',
}

// store
interface IDestinations {
  name: string;
  images: { png: string; webp: string };
  description: string;
  distance: string;
  travel: string;
}
interface ICrew {
  name: string;
  images: { png: string; webp: string };
  role: string;
  bio: string;
}
interface ITechnology {
  name: string;
  images: { portrait: string; landscape: string };
  description: string;
}

export interface IStore {
  destinations: IDestinations[];
  crew: ICrew[];
  technology: ITechnology[];
}

// actions
interface IGetData {
  type: ActionName.GET_DATA;
}

export type IAction = IGetData;
