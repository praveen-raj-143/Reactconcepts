import React from "react";
class Message extends React.Component{
    render(){
        return(
            <div>
                <h1 className='homeparent'>Props</h1>
                <div className='statetxt'>
                    <p>Props are arguments passed into React components.</p>
                    <p>Props are passed to components via HTML attributes.</p>
                    <p>props stands for properties.</p>
                    <h3>Example :</h3>
                </div>
                <h2 className='state'>Welcome {this.props.name}</h2>
            </div>
        )
    }
}
export default Message