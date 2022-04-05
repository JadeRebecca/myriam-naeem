import styled from 'styled-components';

export const BtnLink = styled.a.attrs((props) => ({
  className: props.className,
}))`
  color: ${({ theme }) => theme.secondary};
  border: 1.4px solid ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  white-space: nowrap;
  padding: 19px 19px;
  font-size: 1.125rem;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  line-height: 1;

  &.small {
    padding: 10px 19px;
    font-size: 1rem;
    font-weight: 500;
  }

  &.icon {
    padding: 2px 12px 2px 12px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ theme }) => theme.secondary};
    border-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.primary};
  }
`;

export const Btn = styled.a.attrs((props) => ({
  className: props.className,
}))`
  color: ${({ theme }) => theme.secondary};
  border: 1.4px solid ${({ theme }) => theme.secondary};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  white-space: nowrap;
  padding: 19px 19px;
  font-size: 1.125rem;
  font-weight: 500;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  line-height: 1;

  &.small {
    padding: 0px 0px;
    font-size: 1rem;
    font-weight: 500;
  }

  &.icon {
    padding: 2px 12px 2px 12px;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    border-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
  }
`;
