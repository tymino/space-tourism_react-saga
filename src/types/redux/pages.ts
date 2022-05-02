import { ICrew, IDestinations, ITechnology } from './data';
import ActionPages from '../enums/Pages';

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
