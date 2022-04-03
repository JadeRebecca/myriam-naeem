import React from 'react'
import {ProjetCol, ProjetDescription, Projet, ProjetTitle, ProjetCompetences, ProjetBtnContainer, ProjetCompetencesTitle} from './ProjetsElements'
import {BtnLink} from '../../Button/ButtonElements'
import { Img } from '../SectionElements'

const ProjetItem = ({ item, img }) => {
  return (
    <ProjetCol>
      <ProjetTitle>{item.titre}</ProjetTitle>
      <Img src={img} alt="projet" />
      <ProjetDescription>
        {item.description}
      </ProjetDescription>
      <ProjetCompetences>
      <ProjetCompetencesTitle>Compétences utilisées</ProjetCompetencesTitle>

      {item.competences.map((el, index) => (
            <span key={index}>{el}</span>
          ))}
      
      </ProjetCompetences>
      <ProjetBtnContainer>
      <BtnLink href="https://www.google.fr/" target="_blank" className="small">
      Voir le code
      </BtnLink>
      
      </ProjetBtnContainer>
    </ProjetCol>
  )
}

export default ProjetItem
