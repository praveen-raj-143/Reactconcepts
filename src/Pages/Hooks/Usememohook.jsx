import React, { useState } from 'react'

const Usememohook = () => {
    const [increment,setIncrement]=useState(0);
    const [number,setNumber]=useState(1);
    // useMemo(()=>{
    //     console.log("memo called")
    // },[number])
  return (
    <div>
        <h1 className='statehead'>UseMemo Hook</h1>
        <div className='statetxt'>
            <p>The React useMemo Hook returns a memoized value.</p>
            <p>Think of memoization as caching a value so that it does not need to be recalculated.</p>
            <p>The useMemo Hook only runs when one of its dependencies update.</p>
            <p>This can improve performance.</p>
        </div>
        <div className='state'>
            <h4>{increment}</h4>
            <button onClick={()=>{
                setIncrement(increment+1)
            }}>increment</button>
            <h3>{number}</h3>
            <button onClick={()=>setNumber(number*2)}>multiply by 2</button>
        </div>
    </div>
  )
}

export default Usememohook