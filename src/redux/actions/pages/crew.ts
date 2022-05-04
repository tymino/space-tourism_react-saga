import ActionPages from '../../../types/enums/Pages';
import { IActionPage, IDataCrew } from '../../../types/redux/pages';

const crew = (payload: IDataCrew[]): IActionPage => ({
  type: ActionPages.SUCCESS_CREW_DATA_PAGE,
  payload,
});

export default crew;
