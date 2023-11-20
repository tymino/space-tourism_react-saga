import { MouseEvent } from 'react'
import { IDataCrew } from '../../../types/redux/pages'
import styled from 'styled-components'
import { device } from '../../../styles/mediaSize'

const StyledTabList = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.mobileL} {
    margin: 32px 0;
    order: 1;
  }
`

const StyledTabListItem = styled.li`
  width: 15px;
  height: 15px;
  margin-right: 24px;

  border-radius: 50%;
  background: ${({ theme }) => theme.colorText};
  opacity: 0.15;

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  &.active {
    opacity: 1;
  }

  @media ${device.laptop} {
    width: 10px;
    height: 10px;
    margin: 0 8px;
  }
`

interface ITabListProps {
  data: IDataCrew[]
  activeSlider: number
  handleSwitchSlider: (sliderIndex: number) => void
}

export const TabList = ({ data, activeSlider, handleSwitchSlider }: ITabListProps) => {
  const handleClickSlider = ({ target }: MouseEvent<HTMLLIElement>) => {
    const index = Number((target as HTMLElement).dataset.index)
    handleSwitchSlider(index)
  }

  return (
    <StyledTabList>
      {data.map(({ name }, index) => (
        <StyledTabListItem
          key={name}
          className={activeSlider === index ? 'active' : ''}
          onClick={handleClickSlider}
          data-index={index}
        />
      ))}
    </StyledTabList>
  )
}
