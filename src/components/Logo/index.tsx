interface ILogoProps {
  className: string;
}

export const Logo = ({ className }: ILogoProps) => {
  return (
    <img className={className} src="./assets/shared/logo.svg" alt="logo" />
  );
};
