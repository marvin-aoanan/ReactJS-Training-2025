import React, {useState} from 'react'

function HookCounterThree() {
  const [name, setName] = useState({firstName: '', lastName: ''})
  return (
    <div>
      <h4>Hook Counter 3</h4>
      <form>
        <input type='text' value={name.firstName} onChange={event => setName({...name, firstName: event.target.value})} />
        <input type='text' value={name.lastName} onChange={event => setName({...name, lastName: event.target.value})} />
        <p>Your first name is: {name.firstName}</p>
        <p>Your last name is: {name.lastName}</p>
        <p>{JSON.stringify(name)}</p>
      </form>
    </div>
  )
}

export default HookCounterThree

// state variable can be a number, string, boolean, object or an array