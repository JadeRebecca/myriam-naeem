import styled from 'styled-components'

export const Title = styled.h2.attrs((props) => ({
    className: props.className,
  }))`
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-size: 1.875rem;
    line-height: 50px;
    font-weight: 500;
    letter-spacing: 1.4px;
    margin-bottom: 26px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      width: 9%;
      display: block;
      height: 2px;
      background-color: ${({ theme }) => theme.secondary};
      bottom: -5px;
      margin-left : 45%;

      @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
        width: 17%;
        margin-left : 40%;
      }
    }

    &.reverse {
      color: ${({ theme }) => theme.white};
    }
`