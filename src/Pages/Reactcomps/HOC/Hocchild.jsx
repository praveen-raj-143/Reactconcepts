import React from 'react'
import Hocparent from './Hocparent'

const Hocchild = (props) => {
  return (
    <div>
        <h1 className='homeparent'>Higher Order Component</h1>
        <div className='statetxt'>
            <p>A Higher-Order Component is a function that takes a component as an argument and returns a new component with additional props or modified behavior. This allows you to reuse component logic across multiple components without repeating code.</p>
            <h3>Example : </h3>
        </div>
        <h1 className='state'>Wlcome {props.name}</h1>
    </div>
  )
}

export default Hocparent(Hocchild)