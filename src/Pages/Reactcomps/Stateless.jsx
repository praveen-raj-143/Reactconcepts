import React from 'react'

const Stateless = (props) => {
  return (
    <div>
        <h1 className='statehead'>StateLess Component</h1>
        <div className='statetxt'>
            <p>A stateless component, also known as a functional component, is a type of React component that is primarily responsible for rendering UI based on the data received through props. Stateless components do not have their own internal state, and they are usually simpler and more straightforward compared to stateful components.</p>
            <p>Functional components are simply JavaScript functions that return JSX (or React elements). They take props as an argument, which allows them to receive data from their parent components. These components are preferred when the logic required is minimal and can be achieved using the data provided through props.</p>
            <h3>Example : </h3>
        </div>
        <div>
        <h2 className='state'>Welcome {props.name}</h2>
        </div>
    </div>
  )
}

export default Stateless