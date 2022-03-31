import styled from 'styled-components'

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.primary};
  // transition: all 0.8s ease-in-out;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.main};
`
export const Link = styled.div`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`
export const LinkEl = styled.div``

export const IconWrapper = styled.span`
  padding: 5px;
`
