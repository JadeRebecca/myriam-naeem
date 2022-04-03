import React from 'react'
import { BtnLink } from '../../Button/ButtonElements'
import { Img } from '../SectionElements'
import { ProjetBtnContainer, ProjetCol, ProjetCompetence, ProjetCompetencesContainer, ProjetCompetencesTitle, ProjetDescription, ProjetTitle } from './ProjetsElements'

const ProjetItem = ({ item, img }) => {
  return (
    <ProjetCol>
      <ProjetTitle>{item.titre}</ProjetTitle>
      <Img src={img} alt="projet" />
      <ProjetDescription>
        {item.description}
      </ProjetDescription>
      <ProjetCompetencesContainer>
        <ProjetCompetencesTitle>Compétences utilisées</ProjetCompetencesTitle>
        
          {item.competences.map((el, index) => (
            <ProjetCompetence key={index}>{el}</ProjetCompetence>
          ))}
      </ProjetCompetencesContainer>
      <ProjetBtnContainer>
      <BtnLink href={item.url} target="_blank" className="small">
      Voir le code
      </BtnLink>
      
      </ProjetBtnContainer>
    </ProjetCol>
  )
}

export default ProjetItem
