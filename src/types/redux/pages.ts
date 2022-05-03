import ActionPages from '../enums/Pages';

export interface IDataDestination {
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

export type IDataPages = IDataDestination | IDataCrew | IDataTechnology;

export interface IDataPage {
  loading: boolean;
  error: string | null;
  data: IDataPages[];
}

export interface IStatePages {
  destination: IDataPage;
  crew: IDataPage;
  technology: IDataPage;
}

interface ISetCurrentPage {
  type: ActionPages.SET_CURRENT_PAGE;
  payload: string;
}

interface ILoadDataPage {
  type: ActionPages.LOAD_DATA_PAGE;
  payload: {
    path: string;
  }
}

interface ILoadDataPageSuccess {
  type: ActionPages.LOAD_DATA_PAGE_SUCCESS;
  payload: {
    path: string;
    data: IDataPages[];
  }
}

interface ILoadDataPageFailure {
  type: ActionPages.LOAD_DATA_PAGE_FAILURE;
  payload: {
    path: string;
    error?: string;
    
  }
}

export type IActionPage = ISetCurrentPage | ILoadDataPage | ILoadDataPageSuccess | ILoadDataPageFailure;
