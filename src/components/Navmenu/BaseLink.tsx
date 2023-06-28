import { NavLink } from 'react-router-dom';

import { styled } from 'styled-components';
import { device } from '../../styles/mediaSize';
import { textNavigation } from '../../styles/mixins/text';

interface IBaseLinkProps {
  path: string;
  indexName: string;
  name: string;
}

const LinkContainer = styled.li`
  margin: 38px 25px;

  @media ${device.laptop} {
    margin: 38px 18px;
  }

  @media ${device.tablet} {
    margin: 16px 0 16px 0px;
  }
`;

const NavLinkStyled = styled(NavLink)`
  padding: 36px 0;
  ${textNavigation};

  &:hover {
    border-bottom: 3px solid rgba(var(--colorWhite), 0.5);
  }

  // fix border bottom

  &.active {
    position: relative;
    border-bottom: 3px solid rgb(var(--colorWhite));
    cursor: default;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 4px;
      height: 100%;
      background: rgb(var(--colorWhite));
    }
  }

  @media ${device.tablet} {
    display: flex;
    padding: 0;
    border-bottom: 3px solid var(--color-invisible);
  }
`;

const SpanBold = styled.span`
  font-weight: bold;

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.tablet} {
    display: inline;
    margin-right: 12px;
  }
`;

export const BaseLink = ({ path, indexName, name }: IBaseLinkProps) => {
  return (
    <LinkContainer>
      <NavLinkStyled to={path}>
        <SpanBold>{indexName}</SpanBold>
        <span>{name}</span>
      </NavLinkStyled>
    </LinkContainer>
  );
};
