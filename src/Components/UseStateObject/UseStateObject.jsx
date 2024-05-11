import React, { useState } from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({name: '' , age: 0})

    console.log(person);
  return (
    <div>
        <form>
            <input type="text" 
            value={person.name}
            onChange={e => setPerson({...person, name: e.target.value})}
            />

            <input type="number"
            value={person.age}
            onChange={e => setPerson({...person, age: e.target.value})}
            />
        </form>
    </div>
  )
}

export default UseStateObject