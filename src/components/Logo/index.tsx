import { styled } from 'styled-components';
import { device } from '../../styles/mediaSize';

const LogoContainer = styled.img`
  width: 48px;
  height: 48px;
  margin: 0 55px;

  @media ${device.laptop} {
    margin: 0 40px;
  }

  @media ${device.tablet} {
    margin: 24px 0 0 24px;
  }
`;

export const Logo = () => {
  return <LogoContainer src="./assets/shared/logo.svg" alt="logo" />;
};
