interface IBackgroundProps {
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

export const Background = ({
  className,
  sourceImages,
  image,
}: IBackgroundProps) => {
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
