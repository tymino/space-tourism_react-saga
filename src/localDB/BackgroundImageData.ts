import { ERoutes } from '../routes'

interface ISourceImage {
  id: number
  maxWidth: number
  srcSet: string
}

interface IImage {
  src: string
  alt: string
}

type TBackgroundImageData = {
  [key in ERoutes]: {
    sourceImages: ISourceImage[]
    image: IImage
  }
}

export const BackgroundImageData: TBackgroundImageData = {
  HOME_ROUTE: {
    sourceImages: [
      {
        id: 0,
        maxWidth: 468,
        srcSet: './assets/home/background-home-mobile.jpg',
      },
      {
        id: 1,
        maxWidth: 1024,
        srcSet: './assets/home/background-home-tablet.jpg',
      },
    ],
    image: {
      src: './assets/home/background-home-desktop.jpg',
      alt: 'background-home',
    },
  },
  DESTINATION_ROUTE: {
    sourceImages: [
      {
        id: 0,
        maxWidth: 468,
        srcSet: './assets/destination/background-destination-mobile.jpg',
      },
      {
        id: 1,
        maxWidth: 1024,
        srcSet: './assets/destination/background-destination-tablet.jpg',
      },
    ],
    image: {
      src: './assets/destination/background-destination-desktop.jpg',
      alt: 'background-destination',
    },
  },
  CREW_ROUTE: {
    sourceImages: [
      {
        id: 0,
        maxWidth: 468,
        srcSet: './assets/crew/background-crew-mobile.jpg',
      },
      {
        id: 1,
        maxWidth: 1024,
        srcSet: './assets/crew/background-crew-tablet.jpg',
      },
    ],
    image: {
      src: './assets/crew/background-crew-desktop.jpg',
      alt: 'background-destination-desktop',
    },
  },
  TECHNOLOGY_ROUTE: {
    sourceImages: [
      {
        id: 0,
        maxWidth: 468,
        srcSet: './assets/technology/background-technology-mobile.jpg',
      },
      {
        id: 1,
        maxWidth: 1024,
        srcSet: './assets/technology/background-technology-tablet.jpg',
      },
    ],
    image: {
      src: './assets/technology/background-technology-desktop.jpg',
      alt: 'background-technology',
    },
  },
  NOT_FOUND_ROUTE: {
    sourceImages: [],
    image: {
      src: '',
      alt: '',
    },
  },
}
