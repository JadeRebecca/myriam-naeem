import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { translation } from '../../../I18n/i18n';
import { useIntersection } from '../../../hooks/useIntersection';
import img2 from '../../../images/icons/fi-rr-chart-histogram.svg';
import img4 from '../../../images/icons/fi-rr-chart-network.svg';
import img3 from '../../../images/icons/fi-rr-chart-pie-alt.svg';
import img1 from '../../../images/icons/fi-rr-download.svg';
import img5 from '../../../images/icons/fi-rr-rocket.svg';
import { Title } from '../../SectionTitle/SectionTitleELements';
import { InfoWrapper } from '../SectionElements';
import SkillItem from './SkillItem';
import { SkillsContainer, SkillsWrapper } from './SkillsElements';

const imgArr = [img1, img2, img3, img4, img5];
const skills = translation(lang, 'skills');

const Skills = () => {
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
    <SkillsContainer id="skills" ref={ref}>
      <InfoWrapper>
        <Title>{translation(lang, 'skills-title')}</Title>
        <SkillsWrapper className={animation ? 'goAnimation' : 'hidden'}>
          {skills.map((item, index) => (
            <SkillItem key={index} item={item} img={imgArr[index]} />
          ))}
        </SkillsWrapper>
      </InfoWrapper>
    </SkillsContainer>
  );
};

export default Skills;
