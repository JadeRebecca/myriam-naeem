import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${({ theme }) => theme.white};
  min-height: 700px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    padding: 100px 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    padding: 10px 0;
  }

  
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 24px;

  justify-content: center;
`

export const TextWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  max-width: 1000px;
  padding-top: 0;
  padding-bottom: 60px;

  &.inner {
    padding-bottom: 0px;
  }
`

export const Description = styled.p`
  /*max-width: 440px;*/
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.primary};
  text-align: justify;
`

export const Forth = styled.span`
  font-weight: bold;
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
