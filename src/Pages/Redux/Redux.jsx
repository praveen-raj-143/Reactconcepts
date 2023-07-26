import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incnumber,decnumber } from './Actions'
const Redux = () => {
  const mystate=useSelector((state)=>state.chnagenumber)
  const dispatch=useDispatch()
  return (
    <div>
      <h1 className='statehead'>REACT REDUX</h1>
      <div className='statetxt'>
        <p>Redux is an open-source JavaScript library used for managing the state of a web application. It is commonly used with React, but it can be used with any other view library or framework as well. Redux follows the Flux architecture pattern and provides a predictable state container that helps you manage the state of your application in a more organized and maintainable way.</p>
        <p>The main principles of Redux are:</p>
        <ol>
          <li><b>Single Source of Truth:</b> The entire state of the application is stored in a single object called the "store." This makes it easy to understand and manage the state of the application.</li>
          <li><b>State is Read-Only:</b> The state in Redux is immutable, meaning you cannot modify it directly. Instead, you create new state objects whenever you want to update the application state. This enforces an immutable data flow, making state changes more predictable and easier to debug.</li>
          <li><b>Changes are Made with Pure Functions:</b> To update the state, you use pure functions called "reducers." Reducers take the current state and an action as inputs and return a new state based on the action's type.</li>
          <li><b>Changes are Made by Dispatching Actions:</b> To update the state, you dispatch actions. Actions are plain JavaScript objects that describe what should change in the state. Reducers listen for these actions and handle state updates accordingly.</li>
          <li><b>Use of a Store:</b> The state and reducers are combined in a store. The store is responsible for holding the state, providing methods to dispatch actions, and notifying subscribers whenever the state changes.</li>
        </ol>
        <p>Here's a brief overview of how Redux works:</p>
        <ol>
          <li><b>State:</b> The state of the application is stored in a plain JavaScript object. This state is read-only, and changes can only be made through actions.</li>
          <li><b>Actions:</b> Actions are plain JavaScript objects that describe what should change in the state. They must have a type property to identify the "type" of action and optionally include additional data.</li>
          <li><b>Reducers:</b> Reducers are pure functions that take the current state and an action as input and return a new state. Reducers should never modify the original state; instead, they create a new state object.</li>
          <li><b>Store:</b> The store is created using the Redux "createStore" function and holds the state and reducers. It provides methods to get the current state, dispatch actions to update the state, and subscribe to state changes.</li>
          <li><b>Dispatch:</b> To update the state, you dispatch actions to the store. The store sends the action to the reducers, which calculate the new state based on the current state and the action.</li>
          <li><b>Subscribe:</b> Components can subscribe to the store to receive updates whenever the state changes. This allows components to update their UI based on the latest state.</li>
        </ol>
        <p>Redux can be a powerful tool for managing the state of complex applications, as it promotes a unidirectional data flow and separates the state management logic from the view layer. However, for simpler applications or when using React, you might also consider using the React Context API and Hooks like useReducer for state management, as they provide a more lightweight and integrated solution.</p>
        <h3>Example :</h3>
      </div>
      <div className='state'>
        <h2>Counter App3</h2>
            <button  onClick={()=>dispatch(incnumber())}>increment</button>
            <h3>{mystate}</h3>
            <button onClick={()=>dispatch(decnumber())}>decrement</button>
      </div>
    </div>
  )
}

export default Redux