import ClassCounter from './ClassCounter';
import ClassCounterTwo from './ClassCounterTwo'
import HookCounter from './HookCounter';
import HookCounterFour from './HookCounterFour';
import HookCounterThree from './HookCounterThree';
import HookCounterTwo from './HookCounterTwo';

function UseStateHooks() {
  return (
      <div>
        <h2>useState Hooks:</h2>
        <h3>Summary:</h3>
        <ul>
          <li>The useState hook lets you add state to functional components</li>
          <li>In classes, the state is always an object.</li>
          <li>With the useState hook, the state doesn't have to be an object.</li>
          <li>The useState hook returns an array with 2 elements.</li>
          <li>The first element is the current value of the state, and the second element is a state setter function</li>
          <li>New state value depends on the previous state value? You can pass a function to the setter function.</li>
          <li>When dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.</li>
        </ul>
      <ClassCounter />
      <HookCounter />
      <ClassCounterTwo />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
    </div>
  )
}

export default UseStateHooks