import ActionPages from '../../../types/enums/Pages';
import { IActionPage, IDataTechnology } from '../../../types/redux/pages';

const setTechnology = (payload: IDataTechnology[]): IActionPage => ({
  type: ActionPages.SUCCESS_TECHNOLOGY_DATA_PAGE,
  payload,
});

export default setTechnology;
