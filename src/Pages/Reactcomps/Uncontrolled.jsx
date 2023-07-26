import React, { useRef } from 'react'

const Uncontrolled = () => {
    const inputref=useRef()
    const handleSubmit = (event) => {
        event.preventDefault();
        // Access the input value using the ref
        const inputValue = inputref.current.value;
        console.log('Form submitted with value:', inputValue);
      };
  return (
    <div>
        <h1 className='homeparent'>Uncontrolled Component</h1>
        <div className='statetxt'>
            <p>In React, an uncontrolled component is a form element (such as input, textarea, or select) where the form data is handled by the DOM instead of being controlled by React component state. In other words, the state of the form element is managed by the DOM itself rather than being explicitly managed by React code.</p>
            <p>Uncontrolled components are created without using React state or event handlers to manage the form element's value. Instead, they rely on the default behavior of the form elements and use references (refs) to access their values when needed.</p>
            <h3>Example :</h3>
        </div>
        <div className='state'>
      <form onSubmit={handleSubmit}>
        {/* The input value is not controlled by React */}
        <input type="text" ref={inputref} />
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Uncontrolled