import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primary};
  }
  `
