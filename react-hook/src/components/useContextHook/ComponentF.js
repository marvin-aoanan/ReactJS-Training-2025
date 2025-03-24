import React from 'react'
import { UserContext, ChannelContext } from '../../App'

function ComponentF() {
  return (
    <div>
      <h5>This is an old way of using Context</h5>
      <UserContext.Consumer>
        {
          user => {
            return (
              <ChannelContext.Consumer>
                {
                  channel => {
                    return <div>User context value {user}, channel context {channel}</div>
                  }
                }
              </ChannelContext.Consumer>
            )
            
          }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentF