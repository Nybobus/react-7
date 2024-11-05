import React from 'react'
import './Card.scss'

const Card = ({name = "скоро" , image}) => {
  return (
    <>
      <div className="card">
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>1488 отзывов</p>
        <button>Купить</button>
      </div>
    </>
  )
}

export default Card
