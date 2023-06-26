import { styled } from 'styled-components';
import { device } from '../../styles/mediaSize';

import { Logo } from '../';
import { BaseNavigate } from './BaseNavigate';

const NavmenuContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;

  @media ${device.laptop} {
    margin-top: 0px;
  }
`;

const NavmenuLineDecor = styled.div`
  width: 100%;
  margin-right: -20px;
  height: 1px;
  background: ${({ theme }) => `${theme.colorText}55`};

  @media ${device.laptop} {
    display: none;
  }
`;

export const Navmenu = () => {
  return (
    <NavmenuContainer role="banner">
      <Logo />
      <NavmenuLineDecor />

      <BaseNavigate>
        <BaseNavigate.MyLinkList />
      </BaseNavigate>
    </NavmenuContainer>
  );
};
