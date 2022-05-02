import { IRoutes, IDestinations, ICrew, ITechnology } from './redux';

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
