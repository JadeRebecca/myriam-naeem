import styled, { keyframes } from 'styled-components'

export const SkillsContainer = styled.div`
  background: ${({ theme }) => theme.neutral};
  // transition: all 0.8s ease-in-out;
  min-height: 700px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    padding: 100px 0;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    padding: 10px 0;
  }
`
  

export const SkillTitle = styled.h3.attrs((props) => ({
  className: props.className,
}))`
  font-size: 1rem;
  font-weight : 500;
  color: ${({ theme }) => theme.primary};
  text-align : center;

  &.longText {
    // font-size: 18px;
    line-height: 22px;
    margin-bottom: 12px;
  }
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

export const SkillsWrapper = styled.div`
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
  width: 19%;
  transform: scale(1);
  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.05);
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
  font-size: 0.875rem;
  font-weight: 300;
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  text-align : center;
`

// export const Skill = styled.div`
//   padding: 3px 10px;
//   background: ${({ theme }) => theme.neutral};
//   border-radius: 20px;
// `
export const ImgContainer = styled.div`
  padding: 4vw;
`