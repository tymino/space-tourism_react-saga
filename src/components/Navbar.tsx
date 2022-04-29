import React from 'react';
import { NavLink } from 'react-router-dom';

import { INavbarProps } from '../types/props';

const Navbar: React.FC<INavbarProps> = ({ routes }) => {
  const [isOpenMenu, setIsOpenMenu] = React.useState('');
  const menuRef = React.useRef<HTMLUListElement>(null);

  const handleOpenMenu = () => setIsOpenMenu('active');
  const handleCloseMenu = () => setIsOpenMenu('');

  const handleOutsideClick = (e: any) => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (path.includes(menuRef.current)) {
      setIsOpenMenu('');
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="navbar" role="banner">
      <img className="navbar__logo" src="./assets/shared/logo.svg" alt="logo" />
      <div className="navbar__line-decoration"></div>
      <img
        onClick={handleOpenMenu}
        className={`navbar__hamburger ${isOpenMenu}`}
        src="./assets/shared/icon-hamburger.svg"
        alt="icon-hamburger"
      />
      <nav className={`navbar__routes ${isOpenMenu}`}>
        <img
          onClick={handleCloseMenu}
          className={`navbar__close ${isOpenMenu}`}
          src="./assets/shared/icon-close.svg"
          alt="icon-close"
        />
        <ul ref={menuRef}>
          {routes.map(({ index, name, path }) => (
            <li className="navbar__item" key={name + index}>
              {/* <NavLink exact to={path} activeClassName="navbar__item--selected">
                <span>{index}</span> <span>{name}</span>
              </NavLink> */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// export default Navbar;
