import { memo } from 'react';
import styled from 'styled-components';

interface ISourceImages {
  id: number;
  maxWidth: number;
  srcSet: string;
}

interface IImage {
  src: string;
  alt: string;
}

interface IPictureData {
  sourceImages: ISourceImages[];
  image: IImage;
}

interface IBackgroundProps {
  data: IPictureData;
}

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -10;
`;

export const Background = memo(({ data: { sourceImages, image } }: IBackgroundProps) => {
  return (
    <picture>
      {sourceImages.map(({ id, maxWidth, srcSet }) => (
        <source key={id} media={`(max-width: ${maxWidth}px)`} srcSet={srcSet} />
      ))}
      <Image src={image.src} alt={image.alt} />
    </picture>
  );
});
