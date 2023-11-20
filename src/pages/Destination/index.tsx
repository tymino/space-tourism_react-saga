import styled from 'styled-components'
import { device } from '../../styles/mediaSize'
import { heading5 } from '../../styles/mixins/heading'

import { IDataDestination } from '../../types/redux/pages'
import { Background } from '../../components'
import { BaseImage } from '../../components/UI'
import { PlanetInfo } from './PlanetInfo'
import { usePageData } from '../../hooks/usePageData'

const StyledDestination = styled.div`
  padding: 0 11%;

  @media ${device.laptop} {
    padding: 0 38px;
  }
`
const StyledDestinationContainer = styled.div`
  margin-top: 74px;

  @media ${device.laptop} {
    margin-top: 40px;
  }
`
const StyledDestinationSubtitle = styled.div`
  margin-bottom: 60px;
  ${heading5};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colorText};

  & > span {
    opacity: 0.25;
  }

  @media ${device.laptop} {
    text-align: center;
    font-size: 20px;
  }

  @media ${device.mobileL} {
    text-align: center;
    font-size: 16px;
  }
`

const StyledPlanet = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
  }
`
const StyledPlanetImage = styled(BaseImage)`
  width: 445px;
  height: 445px;
  margin-left: 50px;

  @media ${device.laptop} {
    width: 300px;
    height: 300px;
    margin-left: 0px;
    margin-bottom: 50px;
  }

  @media ${device.mobileL} {
    width: 170px;
    height: 170px;
  }
`

export const Destination = () => {
  const { image, data, activeIndex, updateActiveIndex } =
    usePageData<IDataDestination[]>('destination')

  return (
    <StyledDestination role="main">
      <Background data={image} />

      <StyledDestinationContainer>
        <StyledDestinationSubtitle>
          <span>01</span> Pick your destination
        </StyledDestinationSubtitle>
        <StyledPlanet>
          <StyledPlanetImage
            hasSrc={true}
            name={data[activeIndex].images.png}
            nameAlt={data[activeIndex].name}
          />
          <PlanetInfo>
            <PlanetInfo.TabList
              data={data}
              activeTab={activeIndex}
              handleSwitchTab={updateActiveIndex}
            />
            <PlanetInfo.Describe data={data} activeTab={activeIndex} />
          </PlanetInfo>
        </StyledPlanet>
      </StyledDestinationContainer>
    </StyledDestination>
  )
}
