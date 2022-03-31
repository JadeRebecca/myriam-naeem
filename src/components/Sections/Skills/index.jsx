import React, { useEffect, useRef, useState } from 'react'
import { useIntersection } from '../../../hooks/useIntersection'
import { Title } from '../../SectionTitle/SectionTitleELements'
import { InfoContainer, InfoWrapper } from '../SectionElements'
import { skills } from './Data'
import SkillItem from './SkillItem'
import { SkillsContainer, SkillsWrapper } from './SkillsElements'
// import strategyIcon from '../../images/icons/strategy.png'

const Skills = () => {
  const [animation, setAnimation] = useState(false)
  const ref = useRef()
  const inViewport = useIntersection(ref, '0px 0px -500px 0px')

  useEffect(() => {
    if (inViewport) {
      setAnimation(true)
    }
  }, [inViewport])

  return (
    <SkillsContainer id="skills" ref={ref}>
      <InfoWrapper>
        <Title>Compétences</Title>
        <SkillsWrapper className={animation ? 'goAnimation' : 'hidden'}>
          {skills.map((item, index) => (
            <SkillItem key={index} item={item} />
          ))}
        </SkillsWrapper>
      </InfoWrapper>
    </SkillsContainer>
  )
}

export default Skills
