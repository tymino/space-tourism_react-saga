import styled from 'styled-components'
import { BasePicture } from '../../../../components/UI'
import { IDataTechnology } from '../../../../types/redux/pages'
import { device } from '../../../../styles/mediaSize'

const StyledPicture = styled(BasePicture)`
  position: absolute;
  top: 30%;
  right: 0;

  @media ${device.laptop} {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    order: 1;
  }
`

interface IPictureProps {
  data: IDataTechnology[]
  activeButton: number
}

export const Picture = ({ data, activeButton }: IPictureProps) => {
  return (
    <StyledPicture
      sourceImages={[
        {
          id: 0,
          maxWidth: 1020,
          srcSet: data[activeButton].images.landscape,
        },
      ]}
      image={{
        src: data[activeButton].images.portrait,
        alt: data[activeButton].name,
      }}
    />
  )
}
