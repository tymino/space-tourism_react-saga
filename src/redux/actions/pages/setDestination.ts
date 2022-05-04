import ActionPages from '../../../types/enums/Pages';
import { IActionPage, IDataDestination } from '../../../types/redux/pages';

const setDestination = (payload: IDataDestination[]): IActionPage => ({
  type: ActionPages.SUCCESS_DESTINATION_DATA_PAGE,
  payload,
});

export default setDestination;
