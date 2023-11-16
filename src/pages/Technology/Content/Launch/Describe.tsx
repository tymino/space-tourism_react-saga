import styled from 'styled-components'
import { device } from '../../../../styles/mediaSize'
import { IDataTechnology } from '../../../../types/redux/pages'
import { textBody, textNavigation } from '../../../../styles/mixins/text'
import { heading3 } from '../../../../styles/mixins/heading'

const StyledContainer = styled.div`
  padding-top: 40px;
  margin-left: 80px;

  @media (max-width: 1280px) {
    margin-left: 30px;
  }

  @media ${device.laptop} {
    order: 3;
    padding-top: 40px;
    margin-left: 0px;
  }
`

const StyledSubheader = styled.div`
  ${textNavigation}
  color: rgb(var(--colorLight));

  @media ${device.laptop} {
    font-size: 16px;
  }

  @media ${device.mobileL} {
    font-size: 14px;
  }
`

const StyledHeader = styled.div`
  margin-top: 10px;
  margin-bottom: 16px;
  ${heading3}
  color: rgb(var(--colorWhite));
  text-transform: uppercase;

  @media (max-width: 1280px) {
    width: 258px;
  }

  @media ${device.laptop} {
    margin-top: 16px;
    margin-bottom: 16px;
    font-size: 40px;
  }

  @media ${device.mobileL} {
    font-size: 24px;
  }
`

const StyledText = styled.div`
  ${textBody}
  color: rgb(var(--colorLight));
  width: 444px;

  @media (max-width: 1280px) {
    width: 258px;
  }

  @media ${device.laptop} {
    width: 458px;
  }

  @media ${device.mobileL} {
    width: 100%;
    max-width: 310px;
    padding: 0 10px;
    font-size: 15px;
  }
`

interface IDescribeProps {
  data: IDataTechnology[]
  activeButton: number
}

export const Describe = ({ data, activeButton }: IDescribeProps) => {
  const { name, description } = data[activeButton]

  return (
    <StyledContainer>
      <StyledSubheader>the terminology...</StyledSubheader>
      <StyledHeader>{name}</StyledHeader>
      <StyledText>{description}</StyledText>
    </StyledContainer>
  )
}
