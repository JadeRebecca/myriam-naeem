import React, { useState, useEffect } from 'react'
import { useIntersection } from '../../../hooks/useIntersection'
import { useRef } from 'react'
import { InfoContainer, InfoWrapper, Title } from '../SectionElements'
import { SkillsContainer } from './SkillsElements'
import SkillItem from './SkillItem'
import { skills } from './Data'
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
    <InfoContainer id="skills" ref={ref}>
      <InfoWrapper>
        <Title className="right">Compétences</Title>
        <SkillsContainer className={animation ? 'goAnimation' : 'hidden'}>
          {skills.map((item, index) => (
            <SkillItem key={index} item={item} />
          ))}
        </SkillsContainer>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Skills
