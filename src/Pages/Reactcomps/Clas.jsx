import React, { Component } from "react";

class Clas extends Component {
    render() {
        return (
            <div className='homeparent'>
                <h1>I am a Class Component</h1>
                <ol>
                    <li>A class component requires you to extend from React. Component and create a render function which returns a React element.</li>
                    <li>It must have the render() method returning JSX (which is syntactically similar to HTML)</li>
                    <li>Also known as Stateful components because they implement logic and state.</li>
                    <li>React lifecycle methods can be used inside class components (for example componentDidMount).</li>
                    {/* <li>It requires different syntax inside a class component to implement hooks. example: <pre></pre> }</li> */}
                    <li>Constructor are used as it needs to store state.</li>
                </ol>
            </div>
        )
    }
}

export default Clas