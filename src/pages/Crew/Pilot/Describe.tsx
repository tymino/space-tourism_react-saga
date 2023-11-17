import styled from 'styled-components'
import { device } from '../../../styles/mediaSize'
import { IDataCrew } from '../../../types/redux/pages'
import { TabList } from './TabList'
import { heading3, heading4 } from '../../../styles/mixins/heading'
import { textBody } from '../../../styles/mixins/text'

const StyledContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const StyledSubheader = styled.div`
  margin-top: 12%;
  margin-bottom: 15px;
  ${heading4}
  color: rgb(var(--colorWhite));
  text-transform: uppercase;
  opacity: 0.5;

  @media ${device.laptop} {
    margin-top: 0px;
    margin-bottom: 8px;
    font-size: 24px;
  }

  @media ${device.mobileL} {
    font-size: 16px;
    order: 2;
  }
`

const StyledHeader = styled.div`
  margin-bottom: 26px;
  ${heading3}
  color: rgb(var(--colorWhite));
  text-transform: uppercase;

  @media ${device.laptop} {
    margin-bottom: 16px;
    font-size: 40px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
    order: 3;
  }
`

const StyledBio = styled.div`
  height: 180px;
  max-width: 444px;
  margin-bottom: 30px;
  ${textBody}
  color: rgb(var(--colorLight));

  @media ${device.laptop} {
    height: 130px;
    max-width: 600px;
    margin-bottom: 0px;
  }

  @media ${device.mobileL} {
    font-size: 15px;
    order: 4;
  }
`

interface IDescribeProps {
  data: IDataCrew[]
  activeSlider: number
  handleSwitchSlider: (sliderIndex: number) => void
}

export const Describe = ({ data, activeSlider, handleSwitchSlider }: IDescribeProps) => {
  const { role, name, bio } = data[activeSlider]

  return (
    <StyledContainer>
      <StyledSubheader>{role}</StyledSubheader>
      <StyledHeader>{name}</StyledHeader>
      <StyledBio>{bio}</StyledBio>

      <TabList data={data} activeSlider={activeSlider} handleSwitchSlider={handleSwitchSlider} />
    </StyledContainer>
  )
}
