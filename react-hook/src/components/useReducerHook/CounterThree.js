import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}


function CounterThree() {

  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
      <label>CounterThree: {count}</label>
      <label>CounterThree: {countTwo}</label>
      <div>
        <button onClick={()=>dispatch('increment')}>Increment</button>
        <button onClick={()=>dispatch('decrement')}>Decrement</button>
        <div>
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
        </div>
        <button onClick={()=>dispatch('reset')}>Reset</button>
      </div>

    </div>
  )
}

export default CounterThree