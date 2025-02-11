import React, { useState } from 'react'

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount)
  const incrementFive = () => {
    for(let i=0; i<5; i++) {
      setCount(prevCount => prevCount + 1)
    }
  }
  return (
    <div>
      <h4>Hook Counter 2</h4>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo

// Using second form of update state value.
// Always use the previous / old state and update it.