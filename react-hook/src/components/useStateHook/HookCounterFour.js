import React, {useState} from 'react'

function HookCounterFour() {
  const [items, setItems] = useState([])
  const addItem = () => {
    setItems([...items, {
      id: items.length,
      value: Math.floor(Math.random() * 10) + 1
    }])
  }
  return (
    <div>
      <h4>Hook Counter 4</h4>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {
          items.map(item => (
            <li key={item.id}>{item.value}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default HookCounterFour