import styled from 'styled-components'

export const Title = styled.h2.attrs((props) => ({
    className: props.className,
  }))`
    text-align: center;
    color: ${({ theme }) => theme.primary};
    font-size: 28px;
    line-height: 50px;
    font-weight: 400;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 26px;
    position: relative;

    &.reverse {
      color: ${({ theme }) => theme.white};
    }

   
    &:after {
        content: '';
        position: absolute;
        width: 9%;
        display: block;
        height: 5px;
        background-color: ${({ theme }) => theme.secondary};
        bottom: -5px;
        margin-left : 45%;
    }
`