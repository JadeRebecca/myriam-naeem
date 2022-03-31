import styled from 'styled-components'

export const WorksWrapper = styled.div``

export const ItemWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 80px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    flex-direction: column;
  }
`
export const InfoWrapper = styled.div`
  /*background: yellow;*/
  display: flex;
  flex-direction: column;
  align-items: ${({ order }) => (order === 1 ? 'start' : 'end')};
  text-align: ${({ order }) => (order === 1 ? 'left' : 'right')};
  width: 40%;
  order: ${({ order }) => order};
  z-index: 2;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
    order: 1;
    align-items: start;
    text-align: left;
  }
`
export const Category = styled.p`
  color: ${({ theme }) => theme.main};
  font-size: 18px;
  line-height: 32px;
`

export const Description = styled.div`
  background-color: ${({ theme }) => theme.neutral};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  padding: 20px;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  line-height: 18px;
  width: 130%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
  }
`
export const TechnoWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`
export const Techno = styled.span`
  padding-right: 10px;
  font-family: 'Anonymous Pro', monospace;
  font-weight: bold;
`

export const ItemImageWrapper = styled.div`
  width: 60%;
  // background: red;
  order: ${({ order }) => order};
  opacity: 0.5;
  z-index: 1;
  :hover {
    opacity: 1;
    transition: 0.3s ease-in-out;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
    order: 2;
  }
`

export const ItemImage = styled.img`
  width: 100%;
`
