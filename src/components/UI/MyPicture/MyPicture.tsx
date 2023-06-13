import { FC } from 'react';

interface IMyPictureProps {
  className: string;
  sourceImages: {
    id: number;
    maxWidth: number;
    srcSet: string;
  }[];
  image: {
    src: string;
    alt: string;
  };
}

const MyPicture: FC<IMyPictureProps> = ({ className, sourceImages, image }) => {
  return (
    <picture className={className}>
      {sourceImages.map(({ id, maxWidth, srcSet }) => (
        <source
          key={id}
          className={`${className}-img`}
          media={`(max-width: ${maxWidth}px)`}
          srcSet={srcSet}
        />
      ))}
      <img className={`${className}-img`} src={image.src} alt={image.alt} />
    </picture>
  );
};

export default MyPicture;
