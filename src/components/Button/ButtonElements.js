import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const BtnLink = styled.a.attrs((props) => ({
  className: props.className,
}))`

  color: ${({ theme }) => theme.secondary};
  border: 1.4px solid ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  line-height: 1;

  &.icon {
    padding: 2px 12px 2px 12px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.secondary};
    border-color: ${({ theme }) => theme.background};
    // color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`

export const Btn = styled.a.attrs((props) => ({
  className: props.className,
}))`
  color: ${({ theme }) => theme.secondary};
  border: 1.4px solid ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  white-space: nowrap;
  padding: 10px 22px;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  line-height: 1;

  &.icon {
    padding: 2px 12px 2px 12px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.secondary};
    border-color: ${({ theme }) => theme.background};
    // color: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
  }
`
