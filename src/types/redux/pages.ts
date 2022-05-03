import ActionPages from '../enums/Pages';

export interface IDestinations {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface ICrew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface ITechnology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export interface IStatePages {
  destinations: {
    loading: boolean;
    error: string | null;
    data: IDestinations[];
  };
  crew: {
    loading: boolean;
    error: string | null;
    data: ICrew[];
  };
  technology: {
    loading: boolean;
    error: string | null;
    data: ITechnology[];
  };
}

type IDataPage = ICrew | IDestinations | ITechnology;

interface ILoadDataPage {
  type: ActionPages.LOAD_DATA_PAGE;
}

interface ILoadDataPageSuccess {
  type: ActionPages.LOAD_DATA_PAGE_SUCCESS;
  payload: IDataPage[];
}

interface ILoadDataPageFailure {
  type: ActionPages.LOAD_DATA_PAGE_FAILURE;
  payload: string;
}

export type IActionPage = ILoadDataPage | ILoadDataPageSuccess | ILoadDataPageFailure;
