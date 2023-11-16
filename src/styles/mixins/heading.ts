import { css } from 'styled-components'

export const heading1 = css`
  font-family: ${({ theme }) => theme.fontBellefair};
  font-size: 150px;
`

export const heading2 = css`
  font-family: ${({ theme }) => theme.fontBellefair};
  font-size: 100px;
`

export const heading3 = css`
  font-family: ${({ theme }) => theme.fontBellefair};
  font-size: 56px;
`

export const heading4 = css`
  font-family: ${({ theme }) => theme.fontBellefair};
  font-size: 32px;
`

export const heading5 = css`
  font-family: ${({ theme }) => theme.fontBarlowCondensed};
  font-size: 28px;
  letter-spacing: 4.75px;
`

export const subHeading1 = css`
  font-family: ${({ theme }) => theme.fontBellefair};
  font-size: 28px;
`

export const subHeading2 = css`
  font-family: ${({ theme }) => theme.fontBarlowCondensed};
  font-size: 14px;
  letter-spacing: 2.35px;
`
