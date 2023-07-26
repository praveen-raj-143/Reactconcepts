import React, { useContext } from 'react'
import { store } from './Parent'
const Child = () => {
    const data=useContext(store)
    console.log(data)
  return (
    <div>
        <h1 className='homeparent'>UseContext Hook</h1>
        <div className='statetxt'>
            <p>React Context is a way to manage state globally.</p>
            <p>It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.</p>
            <h3>Example :</h3>
        </div>
        <h2 className='state'> Welcome {data}</h2>
    </div>
  )
}

export default Child