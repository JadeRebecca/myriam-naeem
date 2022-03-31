import React from 'react'
import { BtnLink, Btn } from './ButtonElements'

const ButtonLink = ({ href, text, icon, onClick }) => {
  const content = icon ?? text

  if (href) {
    return (
      <BtnLink href={href} target="_blank" className={icon ? 'icon' : ''}>
        {content}
      </BtnLink>
    )
  } else {
    return (
      <Btn onClick={onClick} className={icon ? 'icon' : ''}>
        {content}
      </Btn>
    )
  }
}

export default ButtonLink
