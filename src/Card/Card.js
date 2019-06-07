import React from 'react'

const Card = () => {

  const card = {
    'image': 'https://source.unsplash.com/250x250/?face',
    'name': 'Alex',
    'age': '25',
  }

  return (
    <div>
      <img src={card.image} alt="face"/>
      <h2>{card.name}</h2>
      <p>{card.age}</p>
    </div>
  )
}

export default Card