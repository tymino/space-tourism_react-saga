import styled from 'styled-components'
import { Describe } from './Describe'
import { TabList } from './TabList'
import { device } from '../../../styles/mediaSize'

const PlanetInfoContainer = styled.div`
  width: 445px;
  margin-left: 20px;

  @media ${device.laptop} {
    width: 575px;
    margin-left: 0px;
    text-align: center;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`

export const PlanetInfo = ({ children }: { children: JSX.Element[] }) => {
  return <PlanetInfoContainer>{children}</PlanetInfoContainer>
}

PlanetInfo.Describe = Describe
PlanetInfo.TabList = TabList
