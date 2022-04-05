import styled from 'styled-components';

export const InfoContainer = styled.div`
  background: ${({ theme }) => theme.white};
  min-height: 700px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    padding: 100px 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    padding: 10px 0;
  }
`;
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  margin-right: auto;
  margin-left: auto;
  padding: 100px 24px;

  justify-content: center;
`;
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
    margin-left: 45%;

    @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
      width: 17%;
      margin-left: 40%;
    }
  }

  &.reverse {
    color: ${({ theme }) => theme.white};
  }
`;
export const TextWrapper = styled.div.attrs((props) => ({
  className: props.className,
}))`
  max-width: 1000px;
  padding-top: 0;
  padding-bottom: 60px;

  &.inner {
    padding-bottom: 0px;
  }
`;

export const Description = styled.p`
  margin-bottom: 35px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 26px;
  color: ${({ theme }) => theme.primary};
  text-align: justify;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;

export const Forth = styled.span`
  font-weight: bold;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
