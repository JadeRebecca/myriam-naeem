import styled, { keyframes } from 'styled-components'

export const ProjetsContainer = styled.div`
  background: ${({ theme }) => theme.primary};
  // transition: all 0.8s ease-in-out;
  min-height: 700px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    padding: 100px 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    padding: 10px 0;
  }
`

export const ProjetTitle = styled.h3.attrs((props) => ({
  className: props.className,
}))`
  font-size: 18px;
  //color: ${({ theme }) => theme.text};
  text-align : center;
 
`

const divFadeIn = keyframes`
  0% {
    transform: translateY(100%);
  }
100%
   {
    transform: translateY(0%);
  }
`

export const ProjetsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 20px;

  &.hidden {
    display: none;
  }

  &.goAnimation {
    > div {
      animation: ${divFadeIn} 1000ms ease forwards;
    }
  }
`

export const ProjetCol = styled.div`
  //   background: red;
  padding: 15px;
  width: 24%;
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  background-color: ${({ theme }) => theme.ternary};
  color: ${({ theme }) => theme.white};
  transform: scale(1);

  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.05);
    border: 2px solid ${({ theme }) => theme.main};
    box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.xl}px) {
    width: 48%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
  }
`
export const ProjetDescription = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Projet = styled.div`
  font-size: 16px;
  padding: 3px 10px;
  background: ${({ theme }) => theme.neutral};
  border-radius: 20px;
`
export const ProjetCompetences = styled.div`
  margin-top : 5px;
  margin-bottom : 14px;
`
export const ProjetCompetencesTitle = styled.p`
  font-size: 16px;
  line-height : 40px;
`
export const ProjetBtnContainer = styled.div`
    display: flex;
    justify-content: space-around;
`

