import { EActionPages } from '../../../types/enums';
import { IActionPage, IDataCrew } from '../../../types/redux/pages';

export const setCrew = (payload: IDataCrew[]): IActionPage => ({
  type: EActionPages.SUCCESS_CREW_DATA_PAGE,
  payload,
});
