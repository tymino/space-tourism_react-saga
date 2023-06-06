import { FC, memo } from 'react';

interface IMyImage {
  className: string;
  name: string;
  handleClick: any;
}

const MyImage: FC<IMyImage> = ({ className, name, handleClick }) => {
  const setSrc = () => `./assets/shared/${name}.svg`;

  console.log('render', name);

  return (
    <img
      className={className}
      src={setSrc()}
      alt={name}
      onClick={handleClick}
    />
  );
};

export default memo(MyImage);
