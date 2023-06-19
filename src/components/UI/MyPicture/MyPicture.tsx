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

export const MyPicture = ({
  className,
  sourceImages,
  image,
}: IMyPictureProps) => {
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
