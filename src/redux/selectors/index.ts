import { IRootState } from '../reducers';

const selectDestination = (state: IRootState) => state.pages.destination;
const selectCrew = (state: IRootState) => state.pages.crew;
const selectTechnology = (state: IRootState) => state.pages.technology;

export { selectDestination, selectCrew, selectTechnology };
