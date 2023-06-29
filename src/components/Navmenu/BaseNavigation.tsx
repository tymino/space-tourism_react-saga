import { BaseImage } from '../UI';
import { BaseLinkList } from './BaseLinkList';

import { styled, keyframes } from 'styled-components';
import { device } from '../../styles/mediaSize';

import { useNavmenu } from '../../hooks/useNavmenu';

const fadeInOverlay = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: ${({ theme }) => theme.animationOverlayOpacity};
  }
`;

const fadeOutOverlay = keyframes`
  from {
    opacity: ${({ theme }) => theme.animationOverlayOpacity};
  }

  to {
    opacity: 0;
  }
`;

const fadeInMenu = keyframes`
  from {
    right: -100%;
  }

  to {
    right: 0;
  }
`;

const fadeOutMenu = keyframes`
  from {
    right: 0;
  }

  to {
    right: ${({ theme }) => theme.animationMenuPosRight};
  }
`;

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
      opacity: ${({ theme }) => theme.animationOverlayOpacity};
      animation: ${fadeInOverlay} ${({ theme }) => theme.animationDuration};
    }

    &.close {
      opacity: 0;
      animation: ${fadeOutOverlay} ${({ theme }) => theme.animationDuration};
    }
  }
`;

const RoutesStyled = styled.div`
  background: rgba(var(--colorWhite), 0.04);
  padding-left: 80px;
  padding-right: 60px;

  @media ${device.tablet} {
    z-index: 10;
    position: fixed;
    top: 0;
    right: ${({ theme }) => theme.animationMenuPosRight};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100vh;
    margin-right: 0;
    padding: 0px 24px;
    background: rgb(var(--colorDark));

    &.open {
      right: 0;
      animation: ${fadeInMenu} ${({ theme }) => theme.animationDuration};
    }

    &.close {
      right: ${({ theme }) => theme.animationMenuPosRight};
      animation: ${fadeOutMenu} ${({ theme }) => theme.animationDuration};
    }
  }

  @media ${device.mobileM} {
    padding-left: 20px;
    padding-right: 10px;
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
    cursor: pointer;
  }

  @media ${device.mobileM} {
    margin-right: 0;
  }
`;

const HamburgerButtonStyled = styled(BaseImage)`
  display: none;

  @media ${device.tablet} {
    display: block;
    margin-right: 24px;
    margin-top: 18px;
    cursor: pointer;
  }
`;

export const BaseNavigation = ({ children }: { children: JSX.Element }) => {
  const { isOpenMenu, animation, openMenu, closeMenu } = useNavmenu();

  return (
    <nav>
      {isOpenMenu && <OverlayStyled className={animation} onClick={closeMenu} />}

      <RoutesStyled className={animation}>
        <CloseButtonStyled name="icon-close" nameAlt="icon-close" handleClick={closeMenu} />
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

BaseNavigation.MyLinkList = BaseLinkList;
