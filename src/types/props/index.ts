import { IRoutes } from '../redux/route';
import { IDestinations, ICrew, ITechnology } from '../redux/pages';

interface INavbarProps {
  routes: IRoutes[];
}

interface IDestinationsProps {
  data: IDestinations[];
}

interface ICrewProps {
  data: ICrew[];
}

interface ITechnologyProps {
  data: ITechnology[];
}

export type { INavbarProps, IDestinationsProps, ICrewProps, ITechnologyProps };
