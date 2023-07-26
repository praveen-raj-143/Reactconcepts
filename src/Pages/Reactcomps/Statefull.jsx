import React from 'react'

class Statefull extends React.Component {
    constructor(props){
        super(props)
        this.state={
            count: 0,
        }
    }
    increment =()=>{
        this.setState((prevState)=>({count:prevState.count + 1}))
    }
    decrement =()=>{
        this.setState((prevState)=>({count:prevState.count - 1}))
    }
    render() {
        const {count}=this.state
        return (
            <div>
                <h1 className='statehead'>StateFull Component</h1>
                <div className='statetxt'>
                    <p>A stateful component, also known as a class component or a stateful class component, is a type of React component that can maintain and manage its own internal state. In contrast to functional components, which are mostly stateless and rely on props for data input, stateful components can have their own local state, which allows them to hold and update data throughout their lifecycle.</p>
                    <p>In a stateful component, you define a JavaScript class that extends React.Component or React.PureComponent, and you can initialize and manage the component's state within the class. Stateful components are useful when you need to handle user interactions, manage data changes over time, or implement more complex logic that requires internal state management</p>
                    <h3>Example :</h3>
                </div>
                <div className='state'>
                    <h3>Counter App4</h3>
                    <p>{count}</p>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}
export default Statefull