import styled from 'styled-components'
import { IDataCrew } from '../../../types/redux/pages'
import { device } from '../../../styles/mediaSize'

const StyledContainer = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.mobileL} {
    display: flex;
    justify-content: center;
    border-bottom: 2px solid rgb(var(--colorGray));
  }
`
const StyledImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 11%;

  @media ${device.laptop} {
    width: 50%;
    height: auto;
    max-height: 400px;
    max-width: 300px;
    transform: translateY(40px);
    bottom: 0;
    right: 20%;
  }

  @media ${device.mobileL} {
    position: relative;
    transform: translateY(0px);
    top: 0;
    right: 0;
  }
`

interface IImageProps {
  data: IDataCrew[]
  activeSlider: number
}

export const Image = ({ data, activeSlider }: IImageProps) => {
  const { images, name } = data[activeSlider]

  return (
    <StyledContainer>
      <StyledImage src={images.png} alt={name} />
    </StyledContainer>
  )
}
