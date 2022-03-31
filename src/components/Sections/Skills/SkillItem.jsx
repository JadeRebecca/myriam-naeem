import React from 'react'
import { SkillCol, SkillsDescription, SkillTitle } from './SkillsElements'
import img from '../../../images/icons/react.png'
import { Img } from '../SectionElements'

const SkillItem = ({ item }) => {
  return (
    <SkillCol>
      <Img src={img} alt="projet" />
      <SkillTitle>{item.category}</SkillTitle>
      <SkillsDescription>
        {item.description}
      </SkillsDescription>
    </SkillCol>
  )
}

export default SkillItem
