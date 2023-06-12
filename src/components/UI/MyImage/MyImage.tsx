import { FC, memo } from 'react';

interface IMyImage {
  className: string;
  hasSrc?: boolean;
  name: string;
  nameAlt: string;
  handleClick?: () => void;
}

const MyImage: FC<IMyImage> = ({
  className,
  name,
  hasSrc = false,
  nameAlt,
  handleClick,
}) => {
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

export default memo(MyImage);
