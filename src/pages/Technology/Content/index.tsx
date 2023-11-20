import styled from 'styled-components'
import { Launch } from './Launch'
import { device } from '../../../styles/mediaSize'
import { heading5 } from '../../../styles/mixins/heading'

const StyledContent = styled.div`
  margin-top: 74px;

  @media ${device.laptop} {
    margin-top: 40px;
  }

  @media ${device.mobileL} {
    margin-top: 40px;
  }
`

const StyledSubtitle = styled.div`
  margin-bottom: 60px;
  ${heading5}
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorText};

  & > span {
    opacity: 0.25;
  }

  @media ${device.laptop} {
    text-align: center;
    margin-left: 0px;
    margin-bottom: 60px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
    margin-bottom: 32px;
  }
`

export const Content = ({ children }: { children: JSX.Element[] | JSX.Element }) => {
  return (
    <StyledContent>
      <StyledSubtitle>
        <span>03</span> Space launch 101
      </StyledSubtitle>
      {children}
    </StyledContent>
  )
}

Content.Launch = Launch
