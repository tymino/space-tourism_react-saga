import styled from 'styled-components'
import { IDataDestination } from '../../../types/redux/pages'
import { device } from '../../../styles/mediaSize'
import { heading2, subHeading1, subHeading2 } from '../../../styles/mixins/heading'
import { textBody } from '../../../styles/mixins/text'

interface IDescribeProps {
  data: IDataDestination[]
  activeTab: number
}

const Header = styled.div`
  margin-top: 35px;
  margin-bottom: 14px;

  ${heading2};
  text-transform: uppercase;
  color: rgb(var(--colorWhite));

  @media ${device.laptop} {
    margin-top: 32px;
    margin-bottom: 9px;
    font-size: 80px;
  }

  @media ${device.mobileL} {
    margin-top: 20px;
    margin-bottom: 2px;
    font-size: 56px;
  }
`
const Text = styled.div`
  padding-bottom: 50px;
  border-bottom: 1px solid rgb(var(--colorGray));
  ${textBody};
  color: rgb(var(--colorLight));

  @media ${device.mobileL} {
    padding-bottom: 32px;
  }
`
const Footer = styled.div`
  display: flex;
  margin: 28px 0px;
  text-transform: uppercase;

  @media ${device.laptop} {
    justify-content: center;
  }

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

const Distance = styled.div`
  margin-right: 80px;

  @media ${device.mobileL} {
    margin-right: 0px;
  }
`
const DistanceName = styled.div`
  margin-bottom: 12px;
  ${subHeading2};
  color: rgb(var(--colorLight));
`
const DistanceValue = styled.div`
  ${subHeading1};
  color: rgb(var(--colorWhite));
`

const Travel = styled.div`
  @media ${device.mobileL} {
    margin-top: 32px;
  }
`
const TravelName = styled.div`
  margin-bottom: 12px;
  ${subHeading2};
  color: rgb(var(--colorLight));
`
const TravelValue = styled.div`
  ${subHeading1};
  color: rgb(var(--colorWhite));
`

export const Describe = ({ data, activeTab }: IDescribeProps) => {
  const { name, description, distance, travel } = data[activeTab]

  return (
    <>
      <Header>{name}</Header>
      <Text>{description}</Text>
      <Footer>
        <Distance>
          <DistanceName>avg. distance</DistanceName>
          <DistanceValue>{distance}</DistanceValue>
        </Distance>
        <Travel>
          <TravelName>est. travel time</TravelName>
          <TravelValue>{travel}</TravelValue>
        </Travel>
      </Footer>
    </>
  )
}
