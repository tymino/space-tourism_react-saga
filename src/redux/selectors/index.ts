import { IRootState } from '../reducers';

const selectDestinations = (state: IRootState) => state.pages.destinations;
const selectCrew = (state: IRootState) => state.pages.crew;
const selectTechnology = (state: IRootState) => state.pages.technology;

export { selectDestinations, selectCrew, selectTechnology };
