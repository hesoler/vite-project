import React from 'react'
import './Card.css'

function Card({ title = "Default", description = "Default" }) {
  return (
    <div className='Card'>
      <h2>T&iacute;tulo: {title}</h2>
      <p>Descripci&oacute;n : {description}</p>
    </div>
  )
}

export default Card
