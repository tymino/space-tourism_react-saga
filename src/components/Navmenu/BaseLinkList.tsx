import styled from 'styled-components';
import { device } from '../../styles/mediaSize';
import { routes } from '../../routes';
import { BaseLink } from './BaseLink';

const Container = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-right: 40px;
  opacity: 1;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 160px;
  }
`;

export const BaseLinkList = () => {
  return (
    <Container>
      {routes.map(({ id, path, name, indexName, isNavigate }) => {
        const linkProps = { path, name, indexName };
        return isNavigate && <BaseLink key={id} {...linkProps} />;
      })}
    </Container>
  );
};
