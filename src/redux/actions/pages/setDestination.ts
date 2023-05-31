import { EActionPages } from '../../../types/enums';
import { IActionPage, IDataDestination } from '../../../types/redux/pages';

export const setDestination = (payload: IDataDestination[]): IActionPage => ({
  type: EActionPages.SUCCESS_DESTINATION_DATA_PAGE,
  payload,
});
