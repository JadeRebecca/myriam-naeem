import styled, { keyframes } from 'styled-components';
import { Link as LinkS } from 'react-scroll';

const pFadeIn = keyframes`
  0% {
    transform: translateY(100%);
  }
100%
   {
    transform: translateY(0%);
  }
`;

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
`;

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
`;
export const HeroS1 = styled.span`
  display: block;
  margin-top: 24px;
  color: ${({ theme }) => theme.white};
  font-size: 2.5rem;
  font-weight: 400;
  max-width: 600px;
  margin-bottom: 10px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    font-size: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 1.6rem;
  }
`;

export const HeroS2 = styled.span`
  display: block;
  color: ${({ theme }) => theme.secondary};
  font-size: 2.5rem;
  font-weight: 500;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    font-size: 2rem;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 1.6rem;
  }
`;
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
  gap: 5px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    gap: 20px;
    flex-direction: column;
  }
`;
export const HeroLink = styled(LinkS)`
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
  text-align: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    border-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.white};
  }
`;

export const HBtn = styled.a.attrs((props) => ({
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
