// import './Crew.scss'

import { useSelector } from 'react-redux'

import { selectActivePage } from '../../redux/store'
import { IDataCrew } from '../../types/redux/pages'
import { Background } from '../../components'
import { useBackgroundImage, useSwitcher } from '../../hooks'
import { Info } from './Info'
import { Pilot } from './Pilot'
import styled from 'styled-components'
import { device } from '../../styles/mediaSize'

const StyledCrew = styled.div`
  padding: 0 11%;

  @media ${device.laptop} {
    padding: 0 38px;
  }
`

export const Crew = () => {
  const { image } = useBackgroundImage('crew')
  const { activeIndex, updateActiveIndex } = useSwitcher()
  const data = useSelector(selectActivePage) as IDataCrew[]

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
