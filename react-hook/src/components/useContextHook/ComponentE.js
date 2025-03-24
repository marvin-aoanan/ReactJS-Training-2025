import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannelContext} from '../../App'

function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)

  return (
    <div>
      <ComponentF />
      New way of using useContext Hook: <h4>{user} - {channel}</h4>
    </div>
  )
}

export default ComponentE