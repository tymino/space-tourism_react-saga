import { ActionName, IAction } from '../types/redux';

const getData = (): IAction => ({
  type: ActionName.GET_DATA,
});

export {
  getData,
};