import { FC } from 'react';

interface ILogoProps {
  className: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  return (
    <img className={className} src="./assets/shared/logo.svg" alt="logo" />
  );
};

export default Logo;
