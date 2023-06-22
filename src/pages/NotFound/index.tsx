import { styled } from 'styled-components';
import { heading2, heading4 } from '../../styles/mixins/heading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colorText};
  ${heading2};
  font-weight: normal;
  text-transform: uppercase;
`;

const Describe = styled.div`
  color: ${({ theme }) => theme.colorDescribeText};
  ${heading4};
`;

export const NotFound = () => {
  return (
    <Container>
      <Title>404</Title>
      <Describe>Page not found</Describe>
    </Container>
  );
};
