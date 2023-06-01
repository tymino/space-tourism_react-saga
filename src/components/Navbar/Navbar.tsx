import './Navbar.sass';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

// import { selectRoute } from '../../redux/selectors';

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  // const routes = useTypedSelector(selectRoute);

  const menuRef = useRef<HTMLDivElement>(null);
  const linkClickRef = useRef<HTMLUListElement>(null);

  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

  const toggleStyleMenu = () => (isOpenMenu ? 'active' : '');

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

  // useEffect(() => {
  //   dispatch(setRoute(location.pathname));
  // }, [dispatch, location]);

  return (
    <div className="navbar" role="banner">
      <img className="navbar__logo" src="./assets/shared/logo.svg" alt="logo" />
      <div className="navbar__line-decoration"></div>

      <nav ref={menuRef}>
        <img
          className={`navbar__hamburger ${toggleStyleMenu()}`}
          src="./assets/shared/icon-hamburger.svg"
          alt="icon-hamburger"
          onClick={handleOpenMenu}
        />
        <div className={`navbar__routes ${toggleStyleMenu()}`}>
          <img
            className={`navbar__close ${toggleStyleMenu()}`}
            src="./assets/shared/icon-close.svg"
            alt="icon-close"
            onClick={handleCloseMenu}
          />
          <ul ref={linkClickRef}>
            {routes.map(({ index, name, path }: any) => (
              <li className="navbar__item" key={name + index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    [isActive ? 'navbar__item--selected' : null]
                      .filter(Boolean)
                      .join(' ')
                  }
                >
                  <span>{index}</span>
                  <span>{name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
