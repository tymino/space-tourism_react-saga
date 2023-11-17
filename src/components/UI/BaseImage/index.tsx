interface IBaseImage {
  className?: string
  hasSrc?: boolean
  name: string
  nameAlt: string
  handleClick?: () => void
}

export const BaseImage = ({
  className,
  name,
  hasSrc = false,
  nameAlt,
  handleClick,
}: IBaseImage) => {
  const setSrc = () => {
    return hasSrc ? name : `./assets/shared/${name}.svg`
  }

  return <img className={className} src={setSrc()} alt={nameAlt} onClick={handleClick} />
}
