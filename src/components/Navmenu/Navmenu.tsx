import './Navmenu.scss';

import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { useNavmenu } from './useNavmenu';

import { Logo } from '../';

interface IMyLinkProps {
  path: string;
  indexName: string;
  name: string;
}

const MyLink = ({ path, indexName, name }: IMyLinkProps) => {
  const styleActiveLink = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'navmenu__item-selected' : '';
  };

  return (
    <li className="navmenu__item">
      <NavLink to={path} className={styleActiveLink}>
        <span>{indexName}</span>
        <span>{name}</span>
      </NavLink>
    </li>
  );
};

const MyNav = ({ children }: { children: JSX.Element }) => {
  const { isOpenMenu, openMenu, closeMenu } = useNavmenu();

  const styleBurgerMenu = (className: string) => {
    return `${className} ${isOpenMenu ? 'active' : ''}`;
  };

  return (
    <nav>
      {isOpenMenu && <div className="navmenu__overlay" onClick={closeMenu} />}
      <img
        className={styleBurgerMenu('navmenu__hamburger')}
        src="./assets/shared/icon-hamburger.svg"
        alt="icon-hamburger"
        onClick={openMenu}
      />
      <div className={styleBurgerMenu('navmenu__routes')}>
        <img
          className={styleBurgerMenu('navmenu__close')}
          src="./assets/shared/icon-close.svg"
          alt="icon-close"
          onClick={closeMenu}
        />
        {children}
      </div>
    </nav>
  );
};

MyNav.MyLinkList = () => {
  return (
    <ul>
      {routes.map(({ id, path, name, indexName, isNavigate }) => {
        const linkProps = { path, name, indexName };
        return isNavigate && <MyLink key={id} {...linkProps} />;
      })}
    </ul>
  );
};

const Navmenu = () => {
  return (
    <div className="navmenu " role="banner">
      <Logo className="navmenu__logo" />
      <div className="navmenu__line-decoration" />

      <MyNav>
        <MyNav.MyLinkList />
      </MyNav>
    </div>
  );
};

export default Navmenu;
