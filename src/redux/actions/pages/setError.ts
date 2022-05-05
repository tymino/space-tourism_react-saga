import ActionPages from '../../../types/enums/ActionPages';
import { IActionPage } from '../../../types/redux/pages';

const setError = (payload: string): IActionPage => ({
  type: ActionPages.FAILURE_LOAD_DATA_PAGE,
  payload,
});

export default setError;
