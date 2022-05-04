import { IDataCrew, IDataDestination, IDataTechnology } from "../redux/pages";

interface IData {
  error: boolean;
  data: IDataDestination[] | IDataCrew[] | IDataTechnology[];
}

export default IData;