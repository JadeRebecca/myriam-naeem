import React from 'react'
import { works } from './Data'

import { InfoContainer, InfoWrapper, Title } from '../SectionElements'

import WorkItem from './WorkItem'
import { WorksWrapper } from './WorkElements'

const Work = () => {
  return (
    <InfoContainer id="work">
      <InfoWrapper>
        <Title>Mes projets</Title>

        <WorksWrapper>
          {works.map((item, index) => (
            <WorkItem
              order={index % 2 === 0 ? 1 : 2}
              key={`work-${item.id}`}
              id={item.id}
              title={item.title}
              category={item.category}
              description={item.description}
              images={item.images}
              technos={item.technos}
            />
          ))}
        </WorksWrapper>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Work
