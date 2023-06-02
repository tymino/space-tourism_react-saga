import './Navbar.scss';

import { useState, useRef, useCallback, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const Navbar = () => {
  const menuRef = useRef<HTMLDivElement>(null);
  const linkClickRef = useRef<HTMLUListElement>(null);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const handleOpenMenu = () => setIsOpenMenu(true);
  const handleCloseMenu = () => setIsOpenMenu(false);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    const path = event.composedPath();

    const clickOutside = !path.includes(menuRef.current as Node);
    const clickLink = path.includes(linkClickRef.current as Node);

    if (clickOutside || clickLink) {
      handleCloseMenu();
    }
  }, []);

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => document.body.removeEventListener('click', handleOutsideClick);
  }, [handleOutsideClick]);

  const styleBurgerMenu = (className: string) => {
    return `${className} ${isOpenMenu ? 'active' : ''}`;
  };

  const styleActiveLink = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'navbar__item-selected' : '';
  };

  return (
    <div className="navbar" role="banner">
      <img className="navbar__logo" src="./assets/shared/logo.svg" alt="logo" />
      <div className="navbar__line-decoration"></div>

      <nav ref={menuRef}>
        <img
          className={styleBurgerMenu('navbar__hamburger')}
          src="./assets/shared/icon-hamburger.svg"
          alt="icon-hamburger"
          onClick={handleOpenMenu}
        />
        <div className={styleBurgerMenu('navbar__routes')}>
          <img
            className={styleBurgerMenu('navbar__close')}
            src="./assets/shared/icon-close.svg"
            alt="icon-close"
            onClick={handleCloseMenu}
          />
          <ul ref={linkClickRef}>
            {routes.map(({ id, path, name, indexName, isNavigate }) => {
              return (
                isNavigate && (
                  <li className="navbar__item" key={id}>
                    <NavLink to={path} className={styleActiveLink}>
                      <span>{indexName}</span>
                      <span>{name}</span>
                    </NavLink>
                  </li>
                )
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
