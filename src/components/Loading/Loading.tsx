import './Loading.sass';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../redux/store';

interface ILoadingProps {
  children: JSX.Element;
}

const Loading: FC<ILoadingProps> = ({ children }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      <div>{children}</div>
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

export default Loading;
