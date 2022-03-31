import styled from 'styled-components'

export const InfoContainer = styled.div`
  background: ${({ theme }) => theme.background};
  // transition: all 0.8s ease-in-out;
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
export const InfoRow = styled.div`
  display: grid;
  grid-auto-colums: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1` : `'col1 col2'`};

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
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
export const Title = styled.h2.attrs((props) => ({
  className: props.className,
}))`
  &.left {
    text-align: left;
  }
  &.right {
    text-align: right;
  }

  text-align: center;
  color: ${({ theme }) => theme.main};
  font-size: 28px;
  line-height: 50px;
  font-weight: 400;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 26px;
  font-family: 'Anonymous Pro', monospace;
`

export const SubTitle = styled.h3.attrs((props) => ({
  className: props.className,
}))`
  font-size: 18px;
  color: ${({ theme }) => theme.text};

  &.longText {
    // font-size: 18px;
    line-height: 22px;
    margin-bottom: 12px;
  }

  &.underline {
    text-transform: uppercase;
    text-decoration: underline ${({ theme }) => theme.main};
    text-decoration-thickness: 3px;
  }
`

export const Description = styled.p`
  /*max-width: 440px;*/
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 26px;
  color: ${({ theme }) => theme.text};
  text-align: justify;
`

export const Forth = styled.span`
  font-weight: bold;
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
