import React from 'react'
import Person from './Person.jsx'

const PeopleList = ({people}) => {
  const personNodes = people.map((person, index) => {
    return (
      <Person
        key={index}
        name={person.name}
        mass={person.mass + "kg"}
        height={person.height + "cm"} />
    )
  })

  return (
    <div>
      {personNodes}
    </div>
  )

}

export default PeopleList