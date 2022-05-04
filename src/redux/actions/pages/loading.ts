import ActionPages from '../../../types/enums/Pages';
import { IActionPage } from '../../../types/redux/pages';

const loading = (payload: boolean): IActionPage => ({
  type: ActionPages.LOADING_DATA_PAGE,
  payload,
});

export default loading;
