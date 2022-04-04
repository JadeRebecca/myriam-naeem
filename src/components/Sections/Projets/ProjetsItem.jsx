import React from 'react';
import { useSelector } from 'react-redux';
import { translation } from '../../../I18n/i18n';
import { BtnLink } from '../../Button/ButtonElements';
import { Img } from '../SectionElements';
import {
  ProjetBtnContainer,
  ProjetCol,
  ProjetCompetence,
  ProjetCompetencesContainer,
  ProjetCompetencesTitle,
  ProjetDescription,
  ProjetTitle,
} from './ProjetsElements';

const ProjetItem = ({ item, img }) => {
  const lang = useSelector((state) => state.languageReducer.language);
  return (
    <ProjetCol>
      <ProjetTitle>{item.titre}</ProjetTitle>
      <Img src={img} alt="projet" />
      <ProjetDescription>{item.description}</ProjetDescription>
      <ProjetCompetencesContainer>
        <ProjetCompetencesTitle>{translation(lang, 'projects-subtitle')}</ProjetCompetencesTitle>

        {item.competences.map((el, index) => (
          <ProjetCompetence key={index}>{el}</ProjetCompetence>
        ))}
      </ProjetCompetencesContainer>
      <ProjetBtnContainer>
        <BtnLink href={item.url} target="_blank" className="small">
          {translation(lang, 'projects-button')}
        </BtnLink>
      </ProjetBtnContainer>
    </ProjetCol>
  );
};

export default ProjetItem;
