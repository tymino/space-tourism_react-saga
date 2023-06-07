import { Crew, Destination, Home, NotFound, Technology } from '../pages';

export enum ERoutes {
  home = 'HOME_ROUTE',
  destination = 'DESTINATION_ROUTE',
  crew = 'CREW_ROUTE',
  technology = 'TECHNOLOGY_ROUTE',
  notFound = 'NOT_FOUND_ROUTE',
}

interface IRoutes {
  id: string;
  name: string;
  indexName: string;
  isNavigate: boolean;
  path: string;
  exact: boolean;
  component: () => JSX.Element;
}

export const routes: IRoutes[] = [
  {
    id: ERoutes.home,
    name: 'home',
    indexName: '01',
    isNavigate: true,
    path: '/',
    exact: true,
    component: Home,
  },

  {
    id: ERoutes.destination,
    name: 'destination',
    indexName: '02',
    isNavigate: true,
    path: 'destination',
    exact: true,
    component: Destination,
  },
  {
    id: ERoutes.crew,
    name: 'crew',
    indexName: '03',
    isNavigate: true,
    path: 'crew',
    exact: true,
    component: Crew,
  },
  {
    id: ERoutes.technology,
    name: 'technology',
    indexName: '04',
    isNavigate: true,
    path: 'technology',
    exact: true,
    component: Technology,
  },
  {
    id: ERoutes.notFound,
    name: 'not-found',
    indexName: '00',
    isNavigate: false,
    path: '*',
    exact: false,
    component: NotFound,
  },
];

// export const getRoutePath = (id: string) => {
//   const route = routes.find((route) => route.id === id);

//   if (route) {
//     const { path } = route;

//     return path;
//   }
// };
