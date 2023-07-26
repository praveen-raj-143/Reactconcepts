import React, { useReducer } from 'react'

const Usereducerhook = () => {
    const initial=0;
    const reducer=(state,action)=>{
        switch(action){
            case "add": return state+1;
            case "sup": return state-1;
            default : return 0;
        }
    }
    const [value,dispatch]=useReducer(reducer,initial)
  return (
    <div>
        <h1 className='statehead'>UseReducer Hook</h1>
        <div className='statetxt'>
            <p>The useReducer Hook is similar to the useState Hook.</p>
            <p>It allows for custom state logic.</p>
            <p>If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.</p>
            <h2>Syntax</h2>
            <p>The useReducer Hook accepts two arguments.</p>
            <p>useReducer(reducer, initialState)</p>
            <p>The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.</p>
            <p>The useReducer Hook returns the current stateand a dispatchmethod.</p>
            <p><b>Here is an example of useReducer in a counter app:</b></p>
        </div>
        <div className='state'>
        <h2>Counter App2</h2>
        <div className='statebtn'>
        <h1>{value}</h1>
        <button onClick={()=>dispatch("add")}>increase</button>
        <button onClick={()=>dispatch("sup")}>decrease</button>
        </div>
        </div>
    </div>
  )
}

export default Usereducerhook