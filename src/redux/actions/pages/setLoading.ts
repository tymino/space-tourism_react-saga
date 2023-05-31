import { EActionPages } from '../../../types/enums';
import { IActionPage } from '../../../types/redux/pages';

export const setLoading = (payload: boolean): IActionPage => ({
  type: EActionPages.LOADING_DATA_PAGE,
  payload,
});
