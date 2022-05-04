import ActionPages from '../../../types/enums/Pages';
import { IActionPage } from '../../../types/redux/pages';

const error = (payload: string): IActionPage => ({
  type: ActionPages.FAILURE_LOAD_DATA_PAGE,
  payload,
});

export default error;
