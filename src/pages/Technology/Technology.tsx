// import './Technology.scss'
import { useSelector } from 'react-redux'

import { selectActivePage } from '../../redux/store'
import { IDataTechnology } from '../../types/redux/pages'
import { Background } from '../../components'
import { useBackgroundImage, useSwitcher } from '../../hooks'
import { Content } from './Content'
import { Launch } from './Content/Launch'
import styled from 'styled-components'
import { device } from '../../styles/mediaSize'

const StyledContainer = styled.div`
  padding: 0 11%;

  @media ${device.laptop} {
    padding: 0 0px;
  }
`

export const Technology = () => {
  const { image } = useBackgroundImage('technology')
  const { activeIndex, updateActiveIndex } = useSwitcher()
  const data = useSelector(selectActivePage) as IDataTechnology[]

  return (
    <StyledContainer>
      <Background data={image} />

      <Content>
        <Content.Launch>
          <Launch.ButtonList
            data={data}
            activeButton={activeIndex}
            handleSwitchActiveButton={updateActiveIndex}
          />
          <Launch.Describe data={data} activeButton={activeIndex} />
          <Launch.Picture data={data} activeButton={activeIndex} />
        </Content.Launch>
      </Content>
    </StyledContainer>
  )
}
