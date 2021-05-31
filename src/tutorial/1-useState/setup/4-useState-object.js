import React, { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  })

  /*// unhide 11,12,13,17;hide 16;remove "person." from h3's
const [name, setName] = useState('peter')
const [age, setAge] = useState(24)
const [message, setMessage] = useState('random message')
*/

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' })
    // setMessage('helloWorld')
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
}

export default UseStateObject
