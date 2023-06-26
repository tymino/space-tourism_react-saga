import { BaseImage } from '../UI';
import { BaseLinkList } from './BaseLinkList';

import { styled, css } from 'styled-components';
import { device } from '../../styles/mediaSize';

import { useNavmenu } from './useNavmenu';

const OverlayStyled = styled.div`
  @media ${device.tablet} {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;

    &.open {
      opacity: var(--animation-overlay-opacity);
      animation: fadeInOverlay var(--animation-duration);
    }

    &.close {
      opacity: 0;
      animation: fadeOutOverlay var(--animation-duration);
    }
  }
`;

const RoutesStyled = styled.div`
  background: rgba(var(--colorWhite), 0.04);
  padding-left: 80px;
  padding-right: 60px;

  @media ${device.tablet} {
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;

    &.open {
      opacity: var(--animation-overlay-opacity);
      animation: fadeInOverlay var(--animation-duration);
    }

    &.close {
      opacity: 0;
      animation: fadeOutOverlay var(--animation-duration);
    }
  }
`;

const CloseButtonStyled = styled(BaseImage)`
  display: none;

  @media ${device.tablet} {
    z-index: 12;
    display: block;
    align-self: flex-end;
    width: 24px;
    height: 24px;
    margin-top: 34px;
    margin-bottom: 50px;

    animation: slideMenuOut 0.3s;

    cursor: pointer;
  }

  @media ${device.mobileM} {
    margin-right: 0;
  }
`;

const HamburgerButtonStyled = styled(BaseImage)`
  display: none;

  @media ${device.tablet} {
    display: none;
    cursor: pointer;

    &:not(.active) {
      display: block;
      margin-right: 24px;
      margin-top: 18px;
    }
  }
`;

export const BaseNavigate = ({ children }: { children: JSX.Element }) => {
  const { isOpenMenu, animation, openMenu, closeMenu } = useNavmenu();

  return (
    <nav>
      {isOpenMenu && (
        <OverlayStyled className={animation} onClick={closeMenu} />
      )}

      <RoutesStyled className={animation}>
        <CloseButtonStyled
          name="icon-close"
          nameAlt="icon-close"
          handleClick={closeMenu}
        />
        {children}
      </RoutesStyled>

      <HamburgerButtonStyled
        name="icon-hamburger"
        nameAlt="icon-hamburger"
        handleClick={openMenu}
      />
    </nav>
  );
};

BaseNavigate.MyLinkList = BaseLinkList;
