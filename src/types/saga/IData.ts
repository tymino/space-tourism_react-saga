import { IDataCrew, IDataDestination, IDataTechnology } from '../redux/pages';

export interface IData {
  error: boolean;
  data: IDataDestination[] | IDataCrew[] | IDataTechnology[];
}
