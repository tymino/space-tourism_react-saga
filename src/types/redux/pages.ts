export interface IDataDestination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface IDataCrew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface IDataTechnology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export type TActivePage = IDataDestination[] | IDataCrew[] | IDataTechnology[];