interface IMyImage {
  className: string;
  hasSrc?: boolean;
  name: string;
  nameAlt: string;
  handleClick?: () => void;
}

export const MyImage = ({
  className,
  name,
  hasSrc = false,
  nameAlt,
  handleClick,
}: IMyImage) => {
  const setSrc = () => {
    return hasSrc ? name : `./assets/shared/${name}.svg`;
  };

  return (
    <img
      className={className}
      src={setSrc()}
      alt={nameAlt}
      onClick={handleClick}
    />
  );
};
