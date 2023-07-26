import React from 'react'

const Hocparent = (Component) => {
  return (
    
        class extends React.Component{
        render(){
            return(
                <div>
                    
                    <Component name="praveen"/>
                </div>
            )
        }
    }
    
  )
}

export default Hocparent