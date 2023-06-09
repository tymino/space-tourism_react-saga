import { Route, Routes } from 'react-router-dom';

import { routes } from '../../routes';

const MyRoutes = () => {
  return (
    <Routes>
      {routes.map(({ id, component: Component, path }) => {
        return <Route key={id} element={<Component />} path={path} />;
      })}
    </Routes>
  );
};

export default MyRoutes;
