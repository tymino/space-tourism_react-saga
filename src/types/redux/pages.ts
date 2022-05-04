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

export interface IStatePages {
  loading: boolean;
  error: string | null;
  destination: IDataDestination[];
  crew: IDataCrew[];
  technology: IDataTechnology[];
}

interface ILoadingDataPage {
  type: ActionPages.LOADING_DATA_PAGE;
  payload: boolean;
}
interface ILoadDataPageFailure {
  type: ActionPages.FAILURE_LOAD_DATA_PAGE;
  payload: string;
}

interface IDestinationDataPageSuccess {
  type: ActionPages.SUCCESS_DESTINATION_DATA_PAGE;
  payload: IDataDestination[];
}

interface ICrewDataPageSuccess {
  type: ActionPages.SUCCESS_CREW_DATA_PAGE;
  payload: IDataCrew[];
}

interface ITechnologyDataPageSuccess {
  type: ActionPages.SUCCESS_TECHNOLOGY_DATA_PAGE;
  payload: IDataTechnology[];
}

export type IActionPage =
  | ILoadingDataPage
  | ILoadDataPageFailure
  | IDestinationDataPageSuccess
  | ICrewDataPageSuccess
  | ITechnologyDataPageSuccess;
