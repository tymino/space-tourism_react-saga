import styled from 'styled-components'
import { Pilot } from '../Pilot'
import { device } from '../../../styles/mediaSize'
import { heading5 } from '../../../styles/mixins/heading'

const StyledInfo = styled.div`
  margin-top: 74px;

  @media ${device.laptop} {
    margin-top: 40px;
  }

  @media ${device.mobileL} {
    margin-top: 74px;
  }
`

const StyledSubtitle = styled.div`
  margin-bottom: 60px;

  ${heading5}
  text-transform: uppercase;
  color: rgb(var(--colorWhite));

  @media ${device.laptop} {
    font-size: 20px;
  }

  @media ${device.mobileL} {
    text-align: center;
    margin-bottom: 32px;
    font-size: 16px;
  }
`

export const Info = ({ children }: { children: JSX.Element }) => {
  return (
    <StyledInfo>
      <StyledSubtitle>
        <span>02</span> Meet your crew
      </StyledSubtitle>
      {children}
    </StyledInfo>
  )
}

Info.Pilot = Pilot
