// import './Technology.scss'
import styled from 'styled-components'
import { device } from '../../styles/mediaSize'

import { IDataTechnology } from '../../types/redux/pages'
import { Background } from '../../components'
import { Content } from './Content'
import { Launch } from './Content/Launch'

import { usePageData } from '../../hooks/usePageData'

const StyledContainer = styled.div`
  padding: 0 11%;

  @media ${device.laptop} {
    padding: 0 0px;
  }
`

export const Technology = () => {
  const { image, data, activeIndex, updateActiveIndex } =
    usePageData<IDataTechnology[]>('technology')

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
