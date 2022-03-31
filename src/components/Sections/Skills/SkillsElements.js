import styled, { keyframes } from 'styled-components'

const divFadeIn = keyframes`
  0% {
    transform: translateY(100%);
  }
100%
   {
    transform: translateY(0%);
  }
`

export const SkillsContainer = styled.div`
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

export const SkillCol = styled.div`
  //   background: red;
  padding: 15px;
  width: 24%;
  border: 1px solid ${({ theme }) => theme.main};
  border-radius: ${({ theme }) => theme.borderRadius}px;

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
export const SkillsDescription = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

export const Skill = styled.div`
  font-size: 16px;
  padding: 3px 10px;
  background: ${({ theme }) => theme.neutral};
  border-radius: 20px;
`
