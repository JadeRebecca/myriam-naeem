import styled from 'styled-components';

export const FooterContainer = styled.div`
  background: ${({ theme }) => theme.primary};
  // transition: all 0.8s ease-in-out;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  color: ${({ theme }) => theme.white};
`;
export const FooterLogo = styled.span`
  position: absolute;
  left: 24px;
  margin-top: 20px;
  font-size: 1.1rem;
  font-weight: bold;
`;
export const FooterLink = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 24px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.secondary};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 0.7rem;
  }
`;
export const FooterText = styled.div`
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 24px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    font-size: 0.7rem;
  }
`;
