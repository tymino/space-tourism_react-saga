import { useSelector } from 'react-redux'
import { selectLoading } from '../../redux/store'

import { styled } from 'styled-components'
import { heading4 } from '../../styles/mixins/heading'
import { device } from '../../styles/mediaSize'

const LoadingContainer = styled.div`
  margin-top: 40px;
  margin-left: 55px;
  color: ${({ theme }) => theme.colorDescribeText};
  ${heading4};

  @media ${device.laptop} {
    margin-left: 40px;
  }

  @media ${device.mobileL} {
    margin-left: 24px;
  }
`

interface ILoadingProps {
  children: JSX.Element
}

export const Loading = ({ children }: ILoadingProps) => {
  const isLoading = useSelector(selectLoading)

  return <>{isLoading ? <LoadingContainer>Loading...</LoadingContainer> : <div>{children}</div>}</>
}
