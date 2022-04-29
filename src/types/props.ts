import { IRoutes, IDestinations, ICrew, ITechnology } from './redux';

interface INavbarProps {
  routes: IRoutes[];
}

interface IDestinationsProps {
  destinationsData: IDestinations[];
}

interface ICrewProps {
  data: ICrew[];
}

interface ITechnologyProps {
  technologyData: ITechnology[];
}

export type { INavbarProps, IDestinationsProps, ICrewProps, ITechnologyProps };
