import React, {useReducer} from 'react';
import './App.css';
import UseContextHooks from './components/useContextHook/UseContextHooks';
import UseEffectHooks from './components/useEffectHook/UseEffectHooks';
import UseStateHooks from './components/useStateHook/UseStateHooks';
import UseReducerHooks from './components/useReducerHook/UseReducerHooks';
import UseReducerUseContext from './components/useReducerUseContext/UseReducerUseContext';
import UseReducerFetchData from './components/useReducerFetchData/UseReducerFetchData';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()

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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <h1>React Hooks Tutorial 2025</h1>
      {/* <UseStateHooks /> */}
      {/* <UseEffectHooks /> */}
      {/* <UserContext.Provider value={'Marvin'}>
        <ChannelContext.Provider value={'Aoanan'}>
          <UseContextHooks />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <UseReducerHooks /> */}
      {/* {count} */}
      {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <UseReducerUseContext />
      </CountContext.Provider> */}
      <UseReducerFetchData />
    </div>
  );
}

export default App;
