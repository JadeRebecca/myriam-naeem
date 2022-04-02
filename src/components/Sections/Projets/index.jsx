import React, { useEffect, useRef, useState } from 'react'
import { useIntersection } from '../../../hooks/useIntersection'
import { Title } from '../../SectionTitle/SectionTitleELements'
import { InfoWrapper } from '../SectionElements'
import { projets } from './Data'
import { ProjetsWrapper, ProjetsContainer } from './ProjetsElements'
import ProjetItem from './ProjetsItem'
import img1 from '../../../images/projets/projet1.jpg'
import img2 from '../../../images/projets/projet2.jpg'
import img3 from '../../../images/projets/projet3.jpg'
import img4 from '../../../images/projets/projet4.jpg'

const imgArr = [img1, img2, img3, img4]

// import strategyIcon from '../../images/icons/strategy.png'

const Projets = () => {
  const [animation, setAnimation] = useState(false)
  const ref = useRef()
  const inViewport = useIntersection(ref, '0px 0px -500px 0px')

  useEffect(() => {
    if (inViewport) {
      setAnimation(true)
    }
  }, [inViewport])

  return (
    <ProjetsContainer id="projets" ref={ref}>
      <InfoWrapper>
        <Title className="reverse">Mes projets</Title>
        <ProjetsWrapper className={animation ? 'goAnimation' : 'hidden'}>
          {projets.map((item, index) => (
            <ProjetItem key={index} item={item} img={imgArr[item.id-1]}/>
          ))}
        </ProjetsWrapper>
      </InfoWrapper>
    </ProjetsContainer>
  )
}

export default Projets
