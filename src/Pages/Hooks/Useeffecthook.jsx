import React, { useEffect, useState } from 'react'

const Useeffecthook = () => {
    const [fool,setFool]=useState(0)
    useEffect(() => {
        setTimeout(() => {
            setFool((count) => count + 1);
          }, 1000);
      });
  return (
    <div>
        <h1 className='statehead'>UseEffect Hook</h1>
        <div className='statetxt'>
            <p>The useEffect Hook allows you to perform side effects in your components.</p>
            <p>Some examples of side effects are: fetching data, directly updating the DOM, and timers.</p>
            <p>useEffect accepts two arguments. The second argument is optional.</p>
            <p>useEffect(function, dependency)</p>
            <h3>Example :</h3>
            <h1>I've rendered {fool} times!</h1>
        </div>
    </div>
  )
}

export default Useeffecthook