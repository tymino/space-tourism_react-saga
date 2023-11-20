interface ISourceImage {
  id: number
  maxWidth: number
  srcSet: string
}

interface IImage {
  src: string
  alt: string
}

interface IBasePictureProps {
  className?: string
  sourceImages: ISourceImage[]
  image: IImage
}

export const BasePicture = ({ className, sourceImages, image }: IBasePictureProps) => {
  return (
    <picture className={className}>
      {sourceImages.map(({ id, maxWidth, srcSet }) => (
        <source key={id} media={`(max-width: ${maxWidth}px)`} srcSet={srcSet} />
      ))}
      <img src={image.src} alt={image.alt} />
    </picture>
  )
}
