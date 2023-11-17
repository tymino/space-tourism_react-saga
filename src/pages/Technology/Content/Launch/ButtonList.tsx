import { MouseEvent } from 'react'
import { IDataTechnology } from '../../../../types/redux/pages'
import styled from 'styled-components'
import { device } from '../../../../styles/mediaSize'

const StyledButtonList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 40px;

  @media ${device.laptop} {
    order: 2;
    display: flex;
    flex-direction: row;
  }

  @media ${device.mobileL} {
    padding-top: 30px;
  }
`

const StyledButtonItem = styled.button`
  width: 80px;
  height: 80px;
  margin-bottom: 32px;
  border-radius: 50%;
  border: 1px solid rgba(var(--colorWhite), 0.25);
  background: none;
  @include heading4;
  color: rgb(var(--colorWhite));
  cursor: pointer;

  &:hover {
    border: 1px solid rgb(var(--colorWhite));
  }

  &.active {
    background: rgb(var(--colorWhite));
    color: rgb(var(--colorDark));
  }

  @media ${device.laptop} {
    width: 60px;
    height: 60px;
    margin: 0 8px;
  }

  @media ${device.mobileL} {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`

interface IButtonListProps {
  data: IDataTechnology[]
  activeButton: number
  handleSwitchActiveButton: (buttonIndex: number) => void
}

export const ButtonList = ({ data, activeButton, handleSwitchActiveButton }: IButtonListProps) => {
  const handleClickButton = ({ target }: MouseEvent<HTMLButtonElement>) => {
    const index = Number((target as HTMLElement).dataset.index)
    handleSwitchActiveButton(index)
  }

  return (
    <StyledButtonList>
      {data.map((_, index) => {
        const buttonText = index + 1
        return (
          <StyledButtonItem
            key={index}
            className={activeButton === index ? 'active' : ''}
            data-index={index}
            onClick={handleClickButton}
          >
            {buttonText}
          </StyledButtonItem>
        )
      })}
    </StyledButtonList>
  )
}
