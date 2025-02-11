import React, {useState} from "react";

function HookCounter() {
  const [count, setCount] = useState(0) // This syntax use is called array destructuring (ES6 feature)

  return (
    <div>
      <h4>Hook Counter 1</h4>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button> 
      
    </div>
  )
}

export default HookCounter

// useState Hook:
// How to use: useState() as function call
// accepts argument as initial value of state property
// returns a pair of values = the current value of the state property and a method that is capable of 
// updating that state property

// Rules of Hooks
// 1. Only Call Hooks at the Top Level
// Do not call Hooks inside loops, conditions, or nested functions
// 2. Onlu Call Hooks fromReact Functions
// Call them from within React functional componentents and not just regular Javascript function 
// 3. 