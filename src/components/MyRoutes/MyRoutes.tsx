import { Route, Routes } from 'react-router-dom';

import { routes } from '../../routes';

const MyRoutes = () => {
  return (
    <Routes>
      {routes.map(({ id, component: Component, ...props }) => {
        return <Route key={id} element={<Component />} {...props} />;
      })}
    </Routes>
  );
};

export default MyRoutes;
