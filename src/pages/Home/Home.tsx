import styled from 'styled-components'
import { device } from '../../styles/mediaSize'
import { heading1, heading4, heading5 } from '../../styles/mixins/heading'
import { textBody } from '../../styles/mixins/text'

import { Background } from '../../components'
import { useBackgroundImage } from '../../hooks'

const HomePage = styled.div`
  height: 80vh;
  padding: 0 11%;
`

const HomeContainer = styled.div`
  transform: translateY(76%);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    transform: translateY(106px);
  }

  @media ${device.mobileL} {
    transform: translateY(20px);
  }
`

const HomeDescribe = styled.div`
  max-width: 450px;

  @media ${device.laptop} {
    text-align: center;
    margin-bottom: 60px;
  }

  @media ${device.mobileL} {
    margin-bottom: 36px;
  }
`

const HomeDescribeSubtitle = styled.h2`
  ${heading5};
  text-transform: uppercase;
  color: rgb(var(--colorLight));
  font-weight: normal;

  @media ${device.mobileL} {
    font-size: 16px;
  }
`

const HomeDescribeHeader = styled.h1`
  margin: 24px 0;
  ${heading1};
  text-transform: uppercase;
  color: rgb(var(--colorWhite));
  font-weight: normal;

  @media ${device.mobileL} {
    font-size: 80px;
    margin: 8px 0;
  }
`

const HomeDescribeText = styled.div`
  ${textBody};
  color: rgb(var(--colorLight));

  @media ${device.mobileL} {
    font-size: 15px;
  }
`

const HomeExplore = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  height: 274px;
  border-radius: 50%;
  background: rgb(var(--colorWhite));
  ${heading4};
  text-transform: uppercase;
  cursor: pointer;

  &:hover::after {
    content: '';
    position: absolute;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    background: rgb(var(--colorWhite));
    opacity: 0.1;
  }

  @media ${device.laptop} {
    width: 242px;
    height: 242px;

    &:hover::after {
      width: 400px;
      height: 400px;
    }
  }

  @media ${device.mobileL} {
    width: 150px;
    height: 150px;
    font-size: 20px;

    &:hover::after {
      width: 210px;
      height: 210px;
    }
  }
`

export const Home = () => {
  const image = useBackgroundImage('home')

  return (
    <HomePage role="main">
      <Background data={image} />

      <HomeContainer>
        <HomeDescribe>
          <HomeDescribeSubtitle>So, you want to travel to</HomeDescribeSubtitle>
          <HomeDescribeHeader>Space</HomeDescribeHeader>
          <HomeDescribeText>
            Let's face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we'll give you
            a truly out of this world experience!
          </HomeDescribeText>
        </HomeDescribe>
        <HomeExplore>Explore</HomeExplore>
      </HomeContainer>
    </HomePage>
  )
}
