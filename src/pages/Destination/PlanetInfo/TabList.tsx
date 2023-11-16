import { MouseEvent } from 'react'
import { IDataDestination } from '../../../types/redux/pages'
import styled from 'styled-components'
import { textNavigation } from '../../../styles/mixins/text'
import { device } from '../../../styles/mediaSize'

interface ITabListProps {
  data: IDataDestination[]
  activeTab: number
  handleSwitchTab: (tabIndex: number) => void
}

const TabListContainer = styled.ul`
  display: flex;
  list-style: none;

  @media ${device.laptop} {
    justify-content: center;
  }
`

const TabListItem = styled.li`
  margin-right: 34px;
  padding-bottom: 12px;

  ${textNavigation}
  color: rgb(var(--colorLight));
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid rgba(var(--colorWhite), 0.5);
  }
  &.active {
    border-bottom: 3px solid rgb(var(--colorWhite));
  }

  @media ${device.laptop} {
    margin: 0 18px;
  }

  @media ${device.mobileL} {
    margin: 0 13px;
    font-size: 14px;
  }
`

export const TabList = ({ data, activeTab, handleSwitchTab }: ITabListProps) => {
  const handleClickTab = ({ target }: MouseEvent<HTMLElement>) => {
    const tabIndex = Number((target as HTMLElement).dataset.index)
    handleSwitchTab(tabIndex)
  }

  return (
    <TabListContainer>
      {data.map(({ name }, index) => {
        return (
          <TabListItem
            key={name}
            className={activeTab === index ? 'active' : ''}
            onClick={handleClickTab}
            data-index={index}
          >
            {name}
          </TabListItem>
        )
      })}
    </TabListContainer>
  )
}
