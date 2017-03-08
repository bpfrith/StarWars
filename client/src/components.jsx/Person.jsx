import React from 'react'

const person = ({name, mass, height}) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Mass: {mass} kg</p>
      <p>Height: {height} cm</p>
    </div>
  )
}

export default Person