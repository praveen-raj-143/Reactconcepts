import React, { useCallback, useState } from 'react'

const Usecallbackhook = () => {
  const [count,setCount]=useState(0)
    const handleclick=useCallback(()=>{
        console.log("callback clicked")
        setCount(count+1)
      },[count])
  return (
    <div>
        <h1 className='statehead'>UseCallback HOOK</h1>
        <div className='statetxt'>
          <p>The React useCallback Hook returns a memoized callback function.</p>
          <p>The React useCallback Hook returns a memoized callback function.</p>
          <p>This allows us to isolate resource intensive functions so that they will not automatically run on every render.</p>
          <p>The useCallback Hook only runs when one of its dependencies update.</p>
          <p>This can improve performance.</p>
        </div>
        <div className='state'>
        <h1>{count}</h1>
        <button onClick={handleclick}>increment</button>
        </div>
    </div>
  )
}

export default Usecallbackhook