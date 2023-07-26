import React, { useState } from 'react'
import './Hooks.css'
const Statehook = () => {
    const [count, setCount]=useState(0)
  return (
    <div>
        <h1 className='statehead'>UseState HOOK</h1>
        <div className='statetxt'>
        <p>The React useState Hook allows us to track state in a function component.</p>
        <p>State generally refers to data or properties that need to be tracking in an application.</p>
        <p>We initialize our state by calling useState in our function component.</p>
        <p>useState accepts an initial state and returns two values:</p>
        <ul>
            <li>The current state.</li>
            <li>A function that updates the state.</li>
        </ul>
        <h2>Example :</h2>
        </div>
        
        <div className='state'>
            <h2>Counter App</h2>
            <div className='statebtn'>
            <button  onClick={()=>setCount(count+1)}>increment</button>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count-1)}>decrement</button>
            </div>
        </div>
    </div>
  )
}

export default Statehook