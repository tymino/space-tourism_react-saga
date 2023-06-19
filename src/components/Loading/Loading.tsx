import './Loading.sass';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/store';

interface ILoadingProps {
  children: JSX.Element;
}

export const Loading: FC<ILoadingProps> = ({ children }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};
