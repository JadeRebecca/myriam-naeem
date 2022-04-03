import styled, { keyframes } from 'styled-components'

const pFadeIn = keyframes`
  0% {
    transform: translateY(100%);
  }
100%
   {
    transform: translateY(0%);
  }
`

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  //transition: all 0.8s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    align-items: start;
    padding-top: 20vh;
  }
`

export const HeroContent = styled.h1`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    overflow: hidden;

    &:nth-child(2) * {
      animation-delay: 300ms;
    }
    &:nth-child(3) * {
      animation-delay: 600ms;
    }
    &:nth-child(4) * {
      animation-delay: 1100ms;
    }

    > * {
      animation: ${pFadeIn} 800ms ease forwards;
      transform: translateY(100%);
    }
  }
`
export const HeroS1 = styled.span`
  display: block;
  margin-top: 24px;
  color: ${({ theme }) => theme.white};
  font-size: 2.5rem;
  font-weight : 400;
  max-width: 600px;

  // @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
  //   font-size: 20px;
  // }

  // @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
  //   font-size: 18px;
  // }
`

export const HeroS2 = styled.span`
  display: block;
  color: ${({ theme }) => theme.secondary};
  font-size: 2.5rem;
  font-weight : 500;

  // @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
  //   font-size: 40px;
  // }

  // @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
  //   font-size: 22px;
  // }
`




export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
  gap : 5px;
`
