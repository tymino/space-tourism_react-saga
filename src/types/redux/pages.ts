import ActionPages from '../enums/Pages';

export interface IDataDestinations {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface IDataCrew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface IDataTechnology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export type IDataPages = IDataDestinations | IDataCrew | IDataTechnology;

export interface IDataPage {
  loading: boolean;
  error: string | null;
  data: IDataPages[];
}

export interface IStatePages {
  destinations: IDataPage;
  crew: IDataPage;
  technology: IDataPage;
}

interface ILoadDataPage {
  type: ActionPages.LOAD_DATA_PAGE;
}

interface ILoadDataPageSuccess {
  type: ActionPages.LOAD_DATA_PAGE_SUCCESS;
  payload: IDataPages[];
}

interface ILoadDataPageFailure {
  type: ActionPages.LOAD_DATA_PAGE_FAILURE;
  payload: string;
}

export type IActionPage = ILoadDataPage | ILoadDataPageSuccess | ILoadDataPageFailure;
