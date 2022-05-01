import React from 'react';
import { NavLink } from 'react-router-dom';

import useTypedSelector from '../hooks/useTypedSelector';

const Navbar: React.FC = () => {
  const menuRef = React.useRef<HTMLDivElement>(null);
  const linkClickRef = React.useRef<HTMLUListElement>(null);

  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
  const routes = useTypedSelector((state) => state.routes);

  const toggleStyleMenu = (): string => (isOpenMenu ? 'active' : '');

  const handleOpenMenu = () => setIsOpenMenu(true);
  const handleCloseMenu = () => setIsOpenMenu(false);

  const handleOutsideClick = (event: MouseEvent) => {
    const path = event.composedPath();

    const clickOutside = !path.includes(menuRef.current as Node);
    const clickLink = path.includes(linkClickRef.current as Node);

    if (clickOutside || clickLink) {
      handleCloseMenu();
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => document.body.removeEventListener('click', handleOutsideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="navbar" role="banner">
      <img className="navbar__logo" src="./assets/shared/logo.svg" alt="logo" />
      <div className="navbar__line-decoration"></div>

      <div ref={menuRef}>
        <img
          className={`navbar__hamburger ${toggleStyleMenu()}`}
          src="./assets/shared/icon-hamburger.svg"
          alt="icon-hamburger"
          onClick={handleOpenMenu}
        />
        <nav className={`navbar__routes ${toggleStyleMenu()}`}>
          <img
            className={`navbar__close ${toggleStyleMenu()}`}
            src="./assets/shared/icon-close.svg"
            alt="icon-close"
            onClick={handleCloseMenu}
          />
          <ul ref={linkClickRef}>
            {routes.map(({ index, name, path }) => (
              <li className="navbar__item" key={name + index}>
                <NavLink activeClassName="navbar__item--selected" to={path} exact>
                  <span>{index}</span>
                  <span>{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
