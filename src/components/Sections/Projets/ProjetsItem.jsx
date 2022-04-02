import React from 'react'
import {ProjetCol, ProjetDescription, Projet, ProjetTitle, ProjetCompetences, ProjetBtnContainer, ProjetCompetencesTitle} from './ProjetsElements'
import Btn from '../../Button'
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
        <Btn text="Voir le code"/>
      </ProjetBtnContainer>
    </ProjetCol>
  )
}

export default ProjetItem
