import React from 'react'

import { SubTitle as WorkTitle } from '../SectionElements'

import {
  ItemWrapper,
  InfoWrapper,
  Category,
  Description,
  TechnoWrapper,
  Techno,
  ItemImageWrapper,
  ItemImage,
} from './WorkElements'

const WorkItem = ({ order, title, category, description, images, technos }) => {
  return (
    <ItemWrapper>
      <InfoWrapper order={order}>
        <Category>{category}</Category>
        <WorkTitle className="longText">{title}</WorkTitle>
        <Description>{description}</Description>
        <TechnoWrapper>
          {technos.map((item, index) => (
            <Techno key={`${item}-${index}`}>{item}</Techno>
          ))}
        </TechnoWrapper>
      </InfoWrapper>
      <ItemImageWrapper order={order === 1 ? 2 : 1}>
        <ItemImage
          src={`${process.env.PUBLIC_URL}/images/work/${images[0]}`}
          alt="webapp screenshot"
        />
      </ItemImageWrapper>
    </ItemWrapper>
  )
}

export default WorkItem
