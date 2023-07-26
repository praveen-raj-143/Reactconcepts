import React, { useState } from 'react'

const Controlled = () => {
    const [count,setCount]=useState('')

    const handleChange = (event) => {
        setCount(event.target.value);
      };
  return (
    <div>
        <h1 className='homeparent'> Controlled Component</h1>
        <div className='statetxt'>
            <p>In React, a controlled component refers to a form element (like an input, textarea, or select) whose value is controlled by the state of the React component. Instead of relying solely on the DOM to manage the form element's value, React takes control of it by keeping the value in its component state and updating it through the setState or useState function.</p>
            <p>Controlled components are a core concept in React, and they offer several benefits:</p> 
            <ol>
                <li><b>Single Source of Truth:</b> The component's state serves as the single source of truth for the form element's value. This makes it easier to manage and synchronize the state with other parts of the application.</li>
                <li><b>Immutable Data Flow:</b> Since the value is controlled through React state, any changes to the form element value will be explicitly handled by React. This enforces an immutable data flow, which helps prevent unexpected side effects and makes debugging easier.</li>
                <li><b>Validation and Manipulation:</b> You can easily add validation or manipulate the input value before updating the state, allowing you to control the data that users input.</li>
            </ol>
            <p>To create a controlled component, you need to follow these steps:</p>
            <ol>
                <li>Initialize the component state with the initial value of the form element.</li>
                <li>Provide an event handler function to update the state whenever the value of the form element changes.</li>
            </ol>
            <h3>Example :</h3>
        </div>
        <div className='state'>
         <input
        type="text"
        value={count}
        onChange={handleChange}
      />
      <p>Value: {count}</p>
        </div>
    </div>
  )
}

export default Controlled