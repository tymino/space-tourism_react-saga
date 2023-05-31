import { EActionPages } from '../../../types/enums';
import { IActionPage } from '../../../types/redux/pages';

export const setError = (payload: string): IActionPage => ({
  type: EActionPages.FAILURE_LOAD_DATA_PAGE,
  payload,
});
