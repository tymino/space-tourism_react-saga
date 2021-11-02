import React from 'react';
import { NavLink } from 'react-router-dom';
import useTypedSelector from '../hooks/useTypedSelector';

const Navbar: React.FC = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState('');

  const handleOpenMenu = () => setIsOpenMenu('active');
  const handleCloseMenu = () => setIsOpenMenu('');

  const routesData = useTypedSelector((state) => state.routes);

  return (
    <div className="navbar">
      <img className="navbar__logo" src="./assets/shared/logo.svg" alt="logo" />
      <div className="navbar__line-decoration"></div>
      <img
        onClick={handleOpenMenu}
        className={`navbar__hamburger ${isOpenMenu}`}
        src="./assets/shared/icon-hamburger.svg"
        alt="icon-hamburger"
      />
      <nav className={`navbar__routes ${isOpenMenu}`}>
        <ul>
          <img
            onClick={handleCloseMenu}
            className={`navbar__close ${isOpenMenu}`}
            src="./assets/shared/icon-close.svg"
            alt="icon-close"
          />
          {routesData.map(({ index, name, path }) => (
            <li className="navbar__item" key={name + index}>
              <NavLink exact to={path} activeClassName="navbar__item--selected">
                <span>{index}</span> <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
