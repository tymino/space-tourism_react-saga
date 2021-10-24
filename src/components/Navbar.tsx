import React from 'react';
import { Link } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';

const Navbar = () => {
  const routesData = useTypedSelector((state) => state.routes);

  return (
    <div className="navbar">
      <img className="navbar__logo" src="./assets/shared/logo.svg" alt="logo" />
      <div className="navbar__line-decoration"></div>
      <nav className="navbar__routes">
        <ul>
          {routesData.map(({ index, name, path }) => (
            <li className="navbar__item" key={name}>
              <Link to={path}>
                <span>{index}</span> <span>{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
