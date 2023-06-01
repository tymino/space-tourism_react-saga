import { IRootState } from '../store';

const selectRoute = ({ route }: IRootState) => route.navigation;

const selectDestination = ({ pages }: IRootState) => {
  return {
    loading: pages.loading,
    error: pages.error,
    data: pages.destination,
  };
};

const selectCrew = ({ pages }: IRootState) => {
  return {
    loading: pages.loading,
    error: pages.error,
    data: pages.crew,
  };
};

const selectTechnology = ({ pages }: IRootState) => {
  return {
    loading: pages.loading,
    error: pages.error,
    data: pages.technology,
  };
};

export { selectRoute, selectDestination, selectCrew, selectTechnology };
