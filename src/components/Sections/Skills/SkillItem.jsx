import React from 'react'
import { SkillCol, SkillsDescription, SkillTitle , ImgContainer} from './SkillsElements'
import { Img } from '../SectionElements'

const SkillItem = ({ item, img }) => {
  return (
    <SkillCol>
      <ImgContainer>
      <Img src={img} alt="projet" />
      </ImgContainer>
      <SkillTitle>{item.category}</SkillTitle>
      <SkillsDescription>
        {item.description}
      </SkillsDescription>
    </SkillCol>
  )
}

export default SkillItem
