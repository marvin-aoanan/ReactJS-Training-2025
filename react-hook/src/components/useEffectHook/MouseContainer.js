import React, {useState} from 'react'
import HookMouse from './HookMouse'
import ClassMouse from './ClassMouse'

function MouseContainer() {
  const [display, setDisplay] = useState(true)
  return (
    <div>
      <label>MouseContainer</label>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse />}
    </div>
  )
}

export default MouseContainer