import styled from 'styled-components'
import { Describe } from './Describe'
import { Image } from './Image'
import { device } from '../../../styles/mediaSize'

const StyledPilot = styled.ul`
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
  }
`

interface IPilotProps {
  children: JSX.Element[]
}

export const Pilot = ({ children }: IPilotProps) => {
  return <StyledPilot>{children}</StyledPilot>
}

Pilot.Describe = Describe
Pilot.Image = Image
