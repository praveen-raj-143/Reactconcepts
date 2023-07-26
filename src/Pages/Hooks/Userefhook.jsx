import React, { useRef, useState } from 'react'

const Userefhook = () => {
    const [data,setData]=useState("")
    const reference=useRef(null)
    const submit=()=>{
        const inputdata= reference.current.value
        // console.log(inputdata)
        setData(inputdata)
    }
  return (
    <div>
        <h1 className='statehead'>UseRef Hook</h1>
        <div className='statetxt'>
            <p>The useRef Hook allows you to persist values between renders.</p>
            <p>It can be used to store a mutable value that does not cause a re-render when updated.</p>
            <p>It can be used to access a DOM element directly.</p>
            <h2>Does Not Cause Re-renders</h2>
            <p>If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.</p>
            <p>To avoid this, we can use the useRef Hook</p>
            <h2>Example : </h2>
        </div>
        <div className='state'>
        <input type="text" ref={reference} placeholder='Enter something...'/>
        <button onClick={submit}>submit</button>
        <h2>{data}</h2>
        </div>
    </div>
  )
}

export default Userefhook