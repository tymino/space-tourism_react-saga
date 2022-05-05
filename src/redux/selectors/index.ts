import { IRootState } from '../reducers';

const selectDestination = (state: IRootState) => {
  return {
    loading: state.pages.loading,
    error: state.pages.error,
    data: state.pages.destination,
  };
};

const selectCrew = (state: IRootState) => {
  return {
    loading: state.pages.loading,
    error: state.pages.error,
    data: state.pages.crew,
  };
};

const selectTechnology = (state: IRootState) => {
  return {
    loading: state.pages.loading,
    error: state.pages.error,
    data: state.pages.technology,
  };
};

export { selectDestination, selectCrew, selectTechnology };
