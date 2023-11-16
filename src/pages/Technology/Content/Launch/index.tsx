import styled from 'styled-components'
import { ButtonList } from './ButtonList'
import { Describe } from './Describe'
import { Picture } from './Picture'
import { device } from '../../../../styles/mediaSize'

const StyledLaunch = styled.div`
  display: flex;

  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

export const Launch = ({ children }: { children: JSX.Element[] }) => {
  return <StyledLaunch>{children}</StyledLaunch>
}

Launch.ButtonList = ButtonList
Launch.Describe = Describe
Launch.Picture = Picture
