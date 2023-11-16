import { css } from 'styled-components'

export const textNavigation = css`
  font-family: ${({ theme }) => theme.fontBarlowCondensed};
  font-size: 16px;
  letter-spacing: 2.7px;
  text-transform: uppercase;
`

export const textBody = css`
  font-family: ${({ theme }) => theme.fontBarlow};
  font-size: 18px;
`
