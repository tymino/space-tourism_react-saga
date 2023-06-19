import { Route, Routes } from 'react-router-dom';

import { routes } from '../../routes';

export const MyRoutes = () => {
  return (
    <Routes>
      {routes.map(({ id, component: Component, path }) => {
        return <Route key={id} element={<Component />} path={path} />;
      })}
    </Routes>
  );
};
