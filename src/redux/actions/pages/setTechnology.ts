import { EActionPages } from '../../../types/enums';
import { IActionPage, IDataTechnology } from '../../../types/redux/pages';

export const setTechnology = (payload: IDataTechnology[]): IActionPage => ({
  type: EActionPages.SUCCESS_TECHNOLOGY_DATA_PAGE,
  payload,
});
