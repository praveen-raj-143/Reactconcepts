import React from 'react'
import '../Home/Home.css'
const Func = () => {
  return (
    <div className='homeparent'>
        <h1> I am a Function Component</h1>
        <ol>
            <li>A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element.</li>
            <li>There is no render method used in functional components.</li>
            <li>Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.</li>
            <li>React lifecycle methods (for example, componentDidMount) cannot be used in functional components.</li>
            <li>Hooks can be easily used in functional components to make them Stateful. example: const [name,SetName]= React.useState(" ")</li>
            <li>Constructors are not used.</li>
        </ol>
    </div>
  )
}

export default Func