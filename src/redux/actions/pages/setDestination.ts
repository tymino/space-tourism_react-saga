import ActionPages from '../../../types/enums/ActionPages';
import { IActionPage, IDataDestination } from '../../../types/redux/pages';

const setDestination = (payload: IDataDestination[]): IActionPage => ({
  type: ActionPages.SUCCESS_DESTINATION_DATA_PAGE,
  payload,
});

export default setDestination;
