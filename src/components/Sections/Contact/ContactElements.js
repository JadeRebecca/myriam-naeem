import styled from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;
export const Location = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.primary};
  text-align: justify;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    margin-left: 5vw;
    margin-right: 5vw;
  }
`;
