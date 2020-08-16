import React from 'react'
import { Fade } from 'react-awesome-reveal'

const SkillItem = ({ image, title, copy }) => {
  return (
    <div className='o-grid__col u-3/12@md'>
      <div className='c-skills__box'>
        <img className='c-skills__img' src={image} alt={title} />
        <p className='c-skills__title'>{title}</p>
        <p className='c-skills__copy'>{copy}</p>
      </div>
    </div>
  )
}

export default SkillItem
