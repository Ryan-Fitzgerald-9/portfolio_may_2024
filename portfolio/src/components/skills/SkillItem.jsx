import React from 'react'
import "./skillitem.scss"

const SkillItem = ({ title, imgLoc }) => {
  return (
    <div className='skill'>
        <img className='skill-img' src={imgLoc} alt={title} />
        <h4 className='skill-title'>{title}</h4>
    </div>
  )
}

export default SkillItem