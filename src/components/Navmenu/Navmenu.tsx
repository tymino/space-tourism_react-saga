import './Navmenu.scss';

import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import { useNavmenu } from './useNavmenu';

import { Logo, MyImage } from '../';

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
  const { isOpenMenu, animation, openMenu, closeMenu } = useNavmenu();

  return (
    <nav>
      {isOpenMenu && (
        <div className={`navmenu__overlay ${animation}`} onClick={closeMenu} />
      )}

      <div className={`navmenu__routes ${animation}`}>
        <MyImage
          className="navmenu__close"
          name="icon-close"
          nameAlt="icon-close"
          handleClick={closeMenu}
        />
        {children}
      </div>

      <MyImage
        className="navmenu__hamburger"
        name="icon-hamburger"
        nameAlt="icon-hamburger"
        handleClick={openMenu}
      />
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
