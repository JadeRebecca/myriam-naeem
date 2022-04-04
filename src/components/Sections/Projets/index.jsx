import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { translation } from '../../../I18n/i18n';
import { useIntersection } from '../../../hooks/useIntersection';
import { Title } from '../../SectionTitle/SectionTitleELements';
import { InfoWrapper } from '../SectionElements';
import { ProjetsWrapper, ProjetsContainer } from './ProjetsElements';
import ProjetItem from './ProjetsItem';
import img1 from '../../../images/projets/projet1.jpg';
import img2 from '../../../images/projets/projet2.jpg';
import img3 from '../../../images/projets/projet3.jpg';
import img4 from '../../../images/projets/projet4.jpg';

const imgArr = [img1, img2, img3, img4];
const skills = translation(lang, 'skills');

const Projets = () => {
  const lang = useSelector((state) => state.languageReducer.language);
  const [animation, setAnimation] = useState(false);
  const ref = useRef();
  const inViewport = useIntersection(ref, '0px 0px -500px 0px');

  useEffect(() => {
    if (inViewport) {
      setAnimation(true);
    }
  }, [inViewport]);

  return (
    <ProjetsContainer id="projets" ref={ref}>
      <InfoWrapper>
        <Title className="reverse">{translation(lang, 'projects-title')}</Title>
        <ProjetsWrapper className={animation ? 'goAnimation' : 'hidden'}>
          {projets.map((item, index) => (
            <ProjetItem key={index} item={item} img={imgArr[item.id - 1]} />
          ))}
        </ProjetsWrapper>
      </InfoWrapper>
    </ProjetsContainer>
  );
};

export default Projets;
