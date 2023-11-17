import styled from 'styled-components'
import { device } from '../../styles/mediaSize'

import { IDataCrew } from '../../types/redux/pages'
import { Background } from '../../components'
import { Info } from './Info'
import { Pilot } from './Pilot'
import { usePageData } from '../../hooks/usePageData'

const StyledCrew = styled.div`
  padding: 0 11%;

  @media ${device.laptop} {
    padding: 0 38px;
  }
`

export const Crew = () => {
  const { image, data, activeIndex, updateActiveIndex } = usePageData<IDataCrew[]>('crew')

  return (
    <StyledCrew role="main">
      <Background data={image} />

      <Info>
        <Pilot>
          <Pilot.Describe
            data={data}
            activeSlider={activeIndex}
            handleSwitchSlider={updateActiveIndex}
          />
          <Pilot.Image data={data} activeSlider={activeIndex} />
        </Pilot>
      </Info>
    </StyledCrew>
  )
}
